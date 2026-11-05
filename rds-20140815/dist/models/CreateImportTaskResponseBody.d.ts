import * as $dara from '@darabonba/typescript';
export declare class CreateImportTaskResponseBody extends $dara.Model {
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * 8B993DA9-5272-5414-94E3-4CA8BA0146C2
     */
    requestId?: string;
    /**
     * @remarks
     * The ID of the import task.
     *
     * @example
     * 3384382
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
