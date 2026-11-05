import * as $dara from '@darabonba/typescript';
export declare class SwitchReplicationLinkResponseBody extends $dara.Model {
    /**
     * @remarks
     * The instance ID of the disaster recovery instance.
     *
     * @example
     * 135****
     */
    DBInstanceId?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 2F2DD69B-90AF-1E72-923C-87575658A9D9
     */
    requestId?: string;
    /**
     * @remarks
     * The task ID.
     *
     * @example
     * 159****
     */
    taskId?: number;
    /**
     * @remarks
     * The task name.
     *
     * @example
     * zbtest
     */
    taskName?: string;
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
