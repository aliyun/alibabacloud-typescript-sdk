import * as $dara from '@darabonba/typescript';
export declare class ModifyReadonlyInstanceDelayReplicationTimeResponseBody extends $dara.Model {
    /**
     * @remarks
     * The instance ID of the read-only instance.
     *
     * @example
     * rr-bp****
     */
    DBInstanceId?: string;
    /**
     * @remarks
     * The delayed replication time. Unit: seconds.
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
     * BBB11B5A-7B37-493A-87E6-490BCB7BDF98
     */
    requestId?: string;
    /**
     * @remarks
     * The task ID.
     *
     * @example
     * 241535739
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
