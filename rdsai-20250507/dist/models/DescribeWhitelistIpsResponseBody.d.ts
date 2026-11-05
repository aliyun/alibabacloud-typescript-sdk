import * as $dara from '@darabonba/typescript';
export declare class DescribeWhitelistIpsResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The domain name address.
     *
     * @example
     * www.test123.com
     */
    domain?: string;
    /**
     * @remarks
     * The list of IP addresses.
     *
     * @example
     * 127.0.0.1,192.168.1.0/24
     */
    ipWhitelist?: string;
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
export declare class DescribeWhitelistIpsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The query result.
     */
    data?: DescribeWhitelistIpsResponseBodyData;
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
     * Id of the request
     *
     * @example
     * FE9C65D7-930F-57A5-A207-8C396329****
     */
    requestId?: string;
    /**
     * @remarks
     * The request result.
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
