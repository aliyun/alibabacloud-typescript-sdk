import * as $dara from '@darabonba/typescript';
export declare class SubmitMaterialTaskRequest extends $dara.Model {
    /**
     * @remarks
     * The business group ID.
     *
     * @example
     * xxx
     */
    bizGroupId?: string;
    /**
     * @remarks
     * The task parameters.
     *
     * This parameter is required.
     *
     * @example
     * {
     *     "brandName": "Brand name",
     *     "direction": "HORIZONTAL",
     *     "userPrompt": "Design requirements"
     * }
     */
    taskParam?: string;
    /**
     * @remarks
     * The task type.
     *
     * This parameter is required.
     *
     * @example
     * IMAGE_LOGO
     */
    taskType?: string;
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
