import * as $dara from '@darabonba/typescript';
export declare class DescribePolarClawSkillsMarketResponseBodySkillList extends $dara.Model {
    /**
     * @remarks
     * The assessment status.
     *
     * @example
     * 2
     */
    assessmentStatus?: string;
    /**
     * @remarks
     * The number of downloads.
     *
     * @example
     * 3
     */
    downloadCount?: string;
    /**
     * @remarks
     * The skill name.
     *
     * @example
     * alibabacloud-polardbx-sql
     */
    skillName?: string;
    /**
     * @remarks
     * The skill version.
     *
     * @example
     * 0.0.1-beta.1
     */
    skillVersion?: string;
    /**
     * @remarks
     * The OpenAPI summary.
     *
     * @example
     * Automatically created repository via Image-manage
     */
    summary?: string;
    /**
     * @remarks
     * The tag group.
     */
    tagList?: string[];
    /**
     * @remarks
     * The title.
     *
     * @example
     * Alcohol
     */
    title?: string;
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
export declare class DescribePolarClawSkillsMarketResponseBody extends $dara.Model {
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
     * The number of entries on the current page.
     *
     * @example
     * 1
     */
    pageRecordCount?: number;
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
     * The list of skills.
     */
    skillList?: DescribePolarClawSkillsMarketResponseBodySkillList[];
    /**
     * @remarks
     * The total number of entries.
     *
     * @example
     * 9
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
