import * as $dara from '@darabonba/typescript';
export declare class DescribeKBSyncLinksRequest extends $dara.Model {
    /**
     * @remarks
     * The source channel of the synchronization link.
     *
     * @example
     * FEISHU
     */
    imPlatform?: string;
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
     * The page number of the query results. Default value: 1.
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of synchronization links to return on each page. Valid values: 10, 20, 30, 50, 100, 200, and 500. Default value: 30.
     *
     * @example
     * 30
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
