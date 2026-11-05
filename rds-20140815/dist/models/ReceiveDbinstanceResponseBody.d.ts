import * as $dara from '@darabonba/typescript';
export declare class ReceiveDBInstanceResponseBody extends $dara.Model {
    /**
     * @remarks
     * The instance ID of the disaster recovery instance after the switchover is complete.
     *
     * @example
     * rm-tr2whku*****
     */
    guardDBInstanceId?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * EFB6083A-7699-489B-8278-C0CB4793A96E
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
