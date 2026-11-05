import * as $dara from '@darabonba/typescript';
export declare class DescribeKnowledgeBaseFilesRequest extends $dara.Model {
    /**
     * @remarks
     * The list of file IDs, separated by commas.
     *
     * @example
     * doc_a,doc_b
     */
    fileIds?: string;
    /**
     * @remarks
     * The keyword for the file name.
     *
     * @example
     * FinancialReport
     */
    keyword?: string;
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
     * The unique identifier of the synchronization link.
     *
     * @example
     * pkbl-2ze123456789abc
     */
    linkId?: string;
    /**
     * @remarks
     * The page number.
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of records per page.
     *
     * @example
     * 20
     */
    pageSize?: number;
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
    /**
     * @remarks
     * The source type.
     *
     * @example
     * OSS
     */
    sourceType?: string;
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
