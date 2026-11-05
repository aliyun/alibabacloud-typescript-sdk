import * as $dara from '@darabonba/typescript';
export declare class DescribeDBInstanceSecurityGroupRuleResponseBody extends $dara.Model {
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
     * The details of the security group rules.
     */
    data?: string;
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
     * The request ID.
     *
     * @example
     * 6BFF4136-10B9-130B-BF8E-D3504BCE4F43
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
