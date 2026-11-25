import * as $dara from '@darabonba/typescript';
export declare class DescribeAppDomainDnsRecordRequest extends $dara.Model {
    /**
     * @remarks
     * The business ID.
     *
     * @example
     * WD20250821114240000001
     */
    bizId?: string;
    /**
     * @remarks
     * The domain name.
     *
     * @example
     * rayihealth.cn
     */
    domainName?: string;
    /**
     * @remarks
     * The purpose of querying the DNS configuration.
     *
     * @example
     * restore
     */
    purpose?: string;
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
