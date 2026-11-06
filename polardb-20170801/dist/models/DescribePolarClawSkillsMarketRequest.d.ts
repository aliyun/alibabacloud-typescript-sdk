import * as $dara from '@darabonba/typescript';
export declare class DescribePolarClawSkillsMarketRequest extends $dara.Model {
    /**
     * @remarks
     * The sorting condition. DOWNLOAD_COUNT indicates sorting by download count.
     *
     * @example
     * DOWNLOAD_COUNT
     */
    orderBy?: string;
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
     * The number of entries per page. Valid values:
     * * **30**
     * * **50**
     * * **100**
     *
     * Default value: **30**.
     *
     * @example
     * 30
     */
    pageSize?: number;
    /**
     * @remarks
     * The region ID.
     *
     * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query all available regions for the current account, including region IDs.
     *
     * @example
     * cn-beijing
     */
    regionId?: string;
    /**
     * @remarks
     * The skill name to search by.
     *
     * @example
     * polarclawhub
     */
    searchBySkillName?: string;
    /**
     * @remarks
     * The tag name to search by.
     *
     * @example
     * PolarDB
     */
    searchByTagName?: string;
    /**
     * @remarks
     * The source of the skill. SELF indicates private skills of the current user, and PUBLIC indicates public skills.
     *
     * @example
     * PUBLIC
     */
    source?: string;
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
