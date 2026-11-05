import * as $dara from '@darabonba/typescript';
export declare class AllocateInstancePublicConnectionResponseBody extends $dara.Model {
    /**
     * @remarks
     * The database endpoint.
     *
     * @example
     * test****.mysql.rds.aliyuncs.com
     */
    connectionString?: string;
    /**
     * @remarks
     * The instance ID.
     *
     * @example
     * rm-bp1****
     */
    dbInstanceName?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 65BDA532-28AF-4122-AA39-B382721EEE64
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
