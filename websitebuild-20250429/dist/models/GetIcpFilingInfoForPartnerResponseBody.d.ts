import * as $dara from '@darabonba/typescript';
export declare class GetIcpFilingInfoForPartnerResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The ICP filing number associated with the domain name. Both entity ICP filing numbers and website ICP filing numbers are supported.
     *
     * @example
     * 京ICP备15023563号-3
     */
    icpNumber?: string;
    /**
     * @remarks
     * Indicates whether the domain name has an ICP filing.
     */
    recorded?: boolean;
    /**
     * @remarks
     * The website ICP filing number associated with the domain name.
     *
     * @example
     * 湘ICP备14011526号-3A
     */
    siteRecordNumber?: string;
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
export declare class GetIcpFilingInfoForPartnerResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request result.
     */
    data?: GetIcpFilingInfoForPartnerResponseBodyData;
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
