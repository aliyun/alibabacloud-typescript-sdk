import * as $dara from '@darabonba/typescript';
export declare class RebuildDBInstanceResponseBody extends $dara.Model {
    /**
     * @remarks
     * The queue number for the rebuild. When the number is 0, the rebuild migration starts.
     *
     * @example
     * 3298015
     */
    migrationId?: number;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 355DA57C-8CC4-40AB-B3F8-B684BA32EB9E
     */
    requestId?: string;
    /**
     * @remarks
     * The task ID.
     *
     * @example
     * 208676661
     */
    taskId?: number;
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
