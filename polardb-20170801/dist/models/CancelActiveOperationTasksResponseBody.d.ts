import * as $dara from '@darabonba/typescript';
export declare class CancelActiveOperationTasksResponseBody extends $dara.Model {
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * 25C70FF3-D49B-594D-BECE-0DE2BA1D8BBB
     */
    requestId?: string;
    /**
     * @remarks
     * The IDs of O\\&M events that are canceled at a time. Separate multiple IDs with commas (,).
     *
     * @example
     * 2355,2352
     */
    taskIds?: string;
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
