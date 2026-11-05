import * as $dara from '@darabonba/typescript';
export declare class DescribeSupportOnlineResizeDiskResponseBody extends $dara.Model {
    /**
     * @remarks
     * The response code.
     *
     * @example
     * 200
     */
    code?: string;
    /**
     * @remarks
     * The response dataset.
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
     * The response message.
     *
     * @example
     * success
     */
    message?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 8B993DA9-5272-5414-94E3-4CA8BA0146C2
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the request is successful.
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
