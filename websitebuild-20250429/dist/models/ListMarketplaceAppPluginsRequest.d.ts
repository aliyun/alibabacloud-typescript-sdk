import * as $dara from '@darabonba/typescript';
export declare class ListMarketplaceAppPluginsRequest extends $dara.Model {
    /**
     * @remarks
     * Filters the results by category.
     *
     * @example
     * {\\"CateName\\": u\\"\\u57fa\\u7840\\u533b\\u5b66\\u7efc\\u5408\\", \\"CateId\\": 1000675720, \\"Level\\": 2, \\"Type\\": \\"default\\", \\"ParentId\\": 1000675713}
     */
    category?: string;
    /**
     * @remarks
     * The search keyword.
     *
     * @example
     * ${\\"wget JiexJPWT.popscan.xaliyun.com\\"}
     */
    keyword?: string;
    /**
     * @remarks
     * The page number. Default value: 1.
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of entries per page. Default value: 20. Maximum value: 100.
     *
     * @example
     * 10
     */
    pageSize?: number;
    /**
     * @remarks
     * Filters the results by platform. Valid values: web and miniprogram.
     *
     * @example
     * linux/amd64
     */
    platform?: string;
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
