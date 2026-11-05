import * as $dara from '@darabonba/typescript';
export declare class DescribePolarClawTaskRequest extends $dara.Model {
    /**
     * @remarks
     * The application ID.
     *
     * This parameter is required.
     *
     * @example
     * pa-**************
     */
    applicationId?: string;
    /**
     * @remarks
     * The asynchronous task ID.
     *
     * This parameter is required.
     *
     * @example
     * 0ee00f56-f467-4d41-858c-ca4ede2c770e
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
