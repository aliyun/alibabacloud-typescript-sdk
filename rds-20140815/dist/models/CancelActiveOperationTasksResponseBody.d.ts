import * as $dara from '@darabonba/typescript';
export declare class CancelActiveOperationTasksResponseBody extends $dara.Model {
    /**
     * @remarks
     * The IDs of the tasks canceled in batches. Multiple IDs are separated by commas (,).
     *
     * @example
     * 188****,188****,188****
     */
    ids?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * A807C95D-410C-5BB5-96C0-C6E09F2C3D36
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
