import * as $dara from '@darabonba/typescript';
export declare class DeleteAIDBClusterCustomModelRequest extends $dara.Model {
    /**
     * @remarks
     * The key of the custom model registration to delete.
     *
     * This parameter is required.
     *
     * @example
     * Qwen3-32B
     */
    modelName?: string;
    /**
     * @remarks
     * The region ID.
     *
     * This parameter is required.
     *
     * @example
     * cn-beijing
     */
    regionId?: string;
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
