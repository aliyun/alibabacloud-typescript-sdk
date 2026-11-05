import * as $dara from '@darabonba/typescript';
export declare class UpgradeDBInstanceEngineVersionResponseBody extends $dara.Model {
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
     * 10254125
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
