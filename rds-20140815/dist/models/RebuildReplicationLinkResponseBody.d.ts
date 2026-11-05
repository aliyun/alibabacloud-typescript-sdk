import * as $dara from '@darabonba/typescript';
export declare class RebuildReplicationLinkResponseBody extends $dara.Model {
    /**
     * @remarks
     * The instance ID.
     *
     * @example
     * pgm-bp1trqb4p1xd****
     */
    DBInstanceId?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 65BDA532-28AF-4122-AA39-B382721EEE64
     */
    requestId?: string;
    /**
     * @remarks
     * The task ID.
     *
     * @example
     * 3472****
     */
    taskId?: number;
    /**
     * @remarks
     * The task name.
     *
     * @example
     * test01
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
