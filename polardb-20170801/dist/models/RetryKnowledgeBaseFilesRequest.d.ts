import * as $dara from '@darabonba/typescript';
export declare class RetryKnowledgeBaseFilesRequest extends $dara.Model {
    /**
     * @remarks
     * The IDs of the files to retry. Separate multiple IDs with commas (,). You can specify up to 30 IDs.
     *
     * This parameter is required.
     *
     * @example
     * 91b97b71-xxxx-xxxx-xxxx-33c6a6341cdc
     */
    fileIds?: string;
    /**
     * @remarks
     * The unique identifier of the knowledge base.
     *
     * This parameter is required.
     *
     * @example
     * pkb-xxxxx
     */
    knowledgeBaseId?: string;
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
