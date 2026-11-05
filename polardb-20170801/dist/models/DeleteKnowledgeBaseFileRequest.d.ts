import * as $dara from '@darabonba/typescript';
export declare class DeleteKnowledgeBaseFileRequest extends $dara.Model {
    /**
     * @remarks
     * The file ID. To delete multiple files at a time, separate the file IDs with commas (,). A maximum of 500 file IDs are supported.
     *
     * This parameter is required.
     *
     * @example
     * xxxx-xxxx-xxxx-xxxx
     */
    fileId?: string;
    /**
     * @remarks
     * The unique ID of the knowledge base.
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
