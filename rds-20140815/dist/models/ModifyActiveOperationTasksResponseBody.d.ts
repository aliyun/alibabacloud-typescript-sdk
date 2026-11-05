import * as $dara from '@darabonba/typescript';
export declare class ModifyActiveOperationTasksResponseBody extends $dara.Model {
    /**
     * @remarks
     * The O&M task IDs. Multiple IDs are separated with commas (,).
     *
     * @example
     * 11111,22222
     */
    ids?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * E9ADB6BE-1598-57FC-B86D-D7F4C69B****
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
