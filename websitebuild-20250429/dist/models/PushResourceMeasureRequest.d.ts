import * as $dara from '@darabonba/typescript';
export declare class PushResourceMeasureRequest extends $dara.Model {
    /**
     * @remarks
     * The resource usage.
     *
     * @example
     * 100
     */
    amount?: number;
    /**
     * @remarks
     * The owner ID.
     *
     * @example
     * 123456
     */
    belongId?: string;
    /**
     * @remarks
     * The type of the owner ID, such as siteId or uid.
     *
     * @example
     * USER
     */
    belongIdType?: string;
    /**
     * @remarks
     * The business ID associated with this push, such as the session ID, task ID, or file ID.
     *
     * @example
     * WS20250801154628000001
     */
    bizId?: string;
    /**
     * @remarks
     * The metering data. The value must be a JSON string and is used to flexibly push multiple metrics such as model call counts and token usage.
     *
     * @example
     * {\"MD5\":\"8ba46100bd898461f0f589704f2fad25\",\"driver\":\"vhd\",\"flag\":\"769\",\"imds_support\":\"v1\",\"io_optimized\":true,\"nvme_supported\":false,\"uefi_preferred\":false}
     */
    measureData?: string;
    /**
     * @remarks
     * The business extension metadata. The value must be a JSON string in map format.
     *
     * @example
     * {\"MD5\":\"8ba46100bd898461f0f589704f2fad25\",\"driver\":\"vhd\",\"flag\":\"769\",\"imds_support\":\"v1\",\"io_optimized\":true,\"nvme_supported\":false,\"uefi_preferred\":false}
     */
    metaData?: string;
    /**
     * @remarks
     * The resource identifier.
     *
     * @example
     * InspirationTokens
     */
    resourceCode?: string;
    /**
     * @remarks
     * The usage time. Format: yyyy-MM-dd HH:mm:ss.
     *
     * @example
     * yyyy-MM-dd HH:mm:ss
     */
    useTime?: string;
    /**
     * @remarks
     * The usage type.
     *
     * @example
     * MANUAL_BIZ
     */
    useType?: string;
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
