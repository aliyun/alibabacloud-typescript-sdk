import * as $dara from '@darabonba/typescript';
export declare class DescribeKnowledgeBasesResponseBodyItems extends $dara.Model {
    /**
     * @remarks
     * The number of AI applications that are associated with the knowledge base.
     *
     * @example
     * 2
     */
    bindingAppCount?: number;
    /**
     * @remarks
     * The creation time.
     *
     * The time is in ISO 8601 format in UTC (format: YYYY-MM-DDTHH:mm:ssZ).
     *
     * @example
     * 2025-03-25T09:37:10Z
     */
    creationTime?: string;
    /**
     * @remarks
     * The description of the knowledge base.
     *
     * @example
     * testDesc
     */
    description?: string;
    /**
     * @remarks
     * The unique identifier of the knowledge base.
     *
     * @example
     * pkb-xxxxxx
     */
    knowledgeBaseId?: string;
    /**
     * @remarks
     * The type of the knowledge base. Valid values:
     * - PUBLIC: public.
     * - PERSONAL: personal.
     *
     * @example
     * PUBLIC
     */
    knowledgeBaseType?: string;
    /**
     * @remarks
     * The ID of the knowledge space.
     *
     * @example
     * pks-xxxxxx
     */
    knowledgeSpaceId?: string;
    /**
     * @remarks
     * The name of the knowledge base.
     *
     * @example
     * testName
     */
    name?: string;
    /**
     * @remarks
     * The status of the knowledge base.
     *
     * @example
     * Activation
     */
    status?: string;
    /**
     * @remarks
     * The total number of documents.
     *
     * @example
     * 1
     */
    totalDocs?: number;
    /**
     * @remarks
     * The total size in bytes.
     *
     * @example
     * 231984
     */
    totalSizeBytes?: number;
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
export declare class DescribeKnowledgeBasesResponseBody extends $dara.Model {
    /**
     * @remarks
     * The list of knowledge bases.
     */
    items?: DescribeKnowledgeBasesResponseBodyItems[];
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
     * The number of entries per page. Valid values: **30**, **50**, and **100**.
     *
     * Default value: **30**.
     *
     * @example
     * 30
     */
    pageSize?: number;
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * CDB3258F-B5DE-43C4-8935-CBA0CA******
     */
    requestId?: string;
    /**
     * @remarks
     * The total number of records.
     *
     * @example
     * 1
     */
    totalRecordCount?: number;
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
