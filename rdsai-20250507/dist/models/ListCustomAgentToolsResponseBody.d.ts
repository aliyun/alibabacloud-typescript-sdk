import * as $dara from '@darabonba/typescript';
export declare class ListCustomAgentToolsResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The English description.
     *
     * @example
     * Queries RDS instances.
     */
    en?: string;
    /**
     * @remarks
     * The Japanese description.
     *
     * @example
     * RDS インスタンスの一覧を照会します
     */
    ja?: string;
    /**
     * @remarks
     * The tool name.
     *
     * @example
     * describe_db_instances
     */
    name?: string;
    /**
     * @remarks
     * The Traditional Chinese description.
     *
     * @example
     * 查詢 RDS 實例清單
     */
    tc?: string;
    /**
     * @remarks
     * The read/write type of the tool.
     *
     * @example
     * get
     */
    type?: string;
    /**
     * @remarks
     * The Chinese description.
     *
     * @example
     * 查询RDS实例列表
     */
    zh?: string;
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
export declare class ListCustomAgentToolsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The returned data object.
     */
    data?: ListCustomAgentToolsResponseBodyData[];
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 32DEFB4A-861F-5D1D-ADD5-918E4FD7****
     */
    requestId?: string;
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
