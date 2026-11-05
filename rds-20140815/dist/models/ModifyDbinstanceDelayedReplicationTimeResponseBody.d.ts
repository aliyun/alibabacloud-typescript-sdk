import * as $dara from '@darabonba/typescript';
export declare class ModifyDBInstanceDelayedReplicationTimeResponseBody extends $dara.Model {
    /**
     * @remarks
     * The instance ID of the read-only instance.
     *
     * @example
     * rr-uf6wjk5****
     */
    DBInstanceId?: string;
    /**
     * @remarks
     * The replication delay time of the read-only instance. Unit: seconds.
     *
     * @example
     * 100
     */
    readSQLReplicationTime?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * EFB6083A-7699-489B-8278-C0CB4793A96E
     */
    requestId?: string;
    /**
     * @remarks
     * The task ID.
     *
     * @example
     * 1715482.0
     */
    taskId?: string;
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
