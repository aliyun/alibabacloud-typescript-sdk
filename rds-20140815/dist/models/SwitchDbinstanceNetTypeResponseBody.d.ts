import * as $dara from '@darabonba/typescript';
export declare class SwitchDBInstanceNetTypeResponseBody extends $dara.Model {
    /**
     * @remarks
     * The database endpoint after the switch.
     *
     * @example
     * new****.mysql.rds.aliyuncs.com
     */
    newConnectionString?: string;
    /**
     * @remarks
     * The database endpoint before the switch.
     *
     * @example
     * rm-bp1****.mysql.rds.aliyuncs.com
     */
    oldConnectionString?: string;
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
