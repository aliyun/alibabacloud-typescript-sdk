import * as $dara from '@darabonba/typescript';
export declare class GetDomainInfoForPartnerResponseBodyDataOwnership extends $dara.Model {
    /**
     * @remarks
     * The member name.
     *
     * @example
     * 1189245564569485
     */
    account?: string;
    /**
     * @remarks
     * The provider.
     *
     * @example
     * pai
     */
    provider?: string;
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
export declare class GetDomainInfoForPartnerResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The domain name.
     *
     * @example
     * playnew-alilive.daotantan.com
     */
    domainName?: string;
    /**
     * @remarks
     * The list of DNS server IP addresses.
     *
     * @example
     * NS3.ALIYUN.COM,NS4.ALIYUN.COM
     */
    nameServers?: string;
    /**
     * @remarks
     * The IP ownership.
     */
    ownership?: GetDomainInfoForPartnerResponseBodyDataOwnership;
    /**
     * @remarks
     * The domain name registrar.
     *
     * @example
     * aliyun
     */
    registrar?: string;
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
export declare class GetDomainInfoForPartnerResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request result.
     */
    data?: GetDomainInfoForPartnerResponseBodyData;
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * 6C6B99AC-39EC-5350-874C-204128C905E6
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
