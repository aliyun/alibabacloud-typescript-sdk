import * as $dara from '@darabonba/typescript';
export declare class CreateCloudMigrationPrecheckTaskResponseBody extends $dara.Model {
    /**
     * @remarks
     * The name of the target instance.
     *
     * @example
     * pgm-bp102g323jd4****
     */
    DBInstanceName?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 60F9A12A-16B8-4728-B099-4CA38D32C31C
     */
    requestId?: string;
    /**
     * @remarks
     * The ID of the task.
     *
     * @example
     * 439946016
     */
    taskId?: number;
    /**
     * @remarks
     * The name of the task.
     *
     * @example
     * slf7w7wj3g
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
