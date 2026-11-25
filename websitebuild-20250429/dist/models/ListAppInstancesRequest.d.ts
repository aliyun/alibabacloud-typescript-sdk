import * as $dara from '@darabonba/typescript';
export declare class ListAppInstancesRequest extends $dara.Model {
    /**
     * @remarks
     * The application type. Valid values:
     * - PC_WebSite: web application.
     * - Mini_Program: mini program.
     * If this parameter is not specified or is left empty, no filtering by type is performed. Historical missing, NULL, or empty types are compatible with PC_WebSite.
     *
     * @example
     * PC_WebSite
     */
    applicationType?: string;
    /**
     * @remarks
     * The business ID.
     *
     * @example
     * WS20250731233102000001
     */
    bizId?: string;
    /**
     * @remarks
     * The list of business IDs for the application instances.
     */
    bizIds?: string[];
    /**
     * @remarks
     * Used only in the CONTENT_CREATION pattern: exact match for the fully attached domain name, mutually exclusive with Query. It does not include the protocol, port, or path.
     *
     * @example
     * www.example.com
     */
    domain?: string;
    /**
     * @remarks
     * The expiration start time.
     *
     * @example
     * 2025-12-18T14:30:00Z
     */
    endTimeBegin?: string;
    /**
     * @remarks
     * The expiration end time.
     *
     * @example
     * 2025-12-31T14:30:00Z
     */
    endTimeEnd?: string;
    /**
     * @remarks
     * The extended information.
     *
     * @example
     * {}
     */
    extend?: string;
    /**
     * @remarks
     * The maximum number of results per query.
     *
     * Valid values: 10 to 100. Default value: 20.
     *
     * @example
     * 10
     */
    maxResults?: number;
    /**
     * @remarks
     * The token for the next query. It is empty when there is no next query.
     *
     * @example
     * AAAAARbaCuN6hiD08qrLdwJ9Fh3BFw8paIJ7ylB6A7Qn9JjM
     */
    nextToken?: string;
    /**
     * @remarks
     * The sort field.
     *
     * @example
     * gmtCreated
     */
    orderColumn?: string;
    /**
     * @remarks
     * The sort order. Valid values: ASC and DESC.
     *
     * @example
     * DOWNGRADE
     */
    orderType?: string;
    /**
     * @remarks
     * The page number. Default value: 1.
     *
     * @example
     * 0
     */
    pageNum?: number;
    /**
     * @remarks
     * The number of entries per page. Default value: 10.
     *
     * @example
     * 10
     */
    pageSize?: number;
    /**
     * @remarks
     * The query parameter.
     *
     * @example
     * {\"RequestId\":\"\"}
     */
    query?: string;
    /**
     * @remarks
     * The query mode. CONTENT_CREATION indicates a lightweight query for the content creation site selector, which queries only published sites and does not load aggregate information such as Profile, services, or AI Staff.
     *
     * @example
     * CONTENT_CREATION
     */
    queryMode?: string;
    /**
     * @remarks
     * The status scope.
     */
    statusList?: string[];
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
