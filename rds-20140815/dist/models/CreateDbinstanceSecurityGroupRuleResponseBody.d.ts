import * as $dara from '@darabonba/typescript';
export declare class CreateDBInstanceSecurityGroupRuleResponseBody extends $dara.Model {
    /**
     * @remarks
     * The response code.
     *
     * @example
     * 200
     */
    code?: string;
    /**
     * @remarks
     * The response message.
     *
     * @example
     * successful
     */
    message?: string;
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * 07F6177E-6DE4-408A-BB4F-0723301340F4
     */
    requestId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
