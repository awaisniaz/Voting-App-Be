import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable()

export class LoggingInterceptable implements NestInterceptor {
    // createParamDecorator()  is used for creating Custom decorator
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        const now: any = new Date()

        return next.handle().pipe(tap(() => console.log(`After... ${Date.now() - now}ms`)),);
    }

}