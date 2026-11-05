import * as $dara from '@darabonba/typescript';
export declare class QueryRecommendByCodeResponseBody extends $dara.Model {
    /**
     * @remarks
     * The returned data.
     *
     * @example
     * {
     *       "SupportOnlineResizeDisk": true,
     *       "DBInstanceName": "rm-bp****",
     *       "maxSupportDiskSizeGB": 6144
     * }
     */
    data?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 90496720-2319-42A8-87CD-FCE4DF95EBED
     */
    requestId?: string;
    /**
     * @remarks
     * Specifies whether the request is successful. Valid values:
     *
     * - **true**: The request is successful.
     * - **false**: The request fails.
     *
     * @example
     * true
     */
    success?: boolean;
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
