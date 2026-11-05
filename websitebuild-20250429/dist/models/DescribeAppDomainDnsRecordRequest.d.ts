import * as $dara from '@darabonba/typescript';
export declare class DescribeAppDomainDnsRecordRequest extends $dara.Model {
    /**
     * @remarks
     * Business ID.
     *
     * @example
     * WD20250821114240000001
     */
    bizId?: string;
    /**
     * @remarks
     * Domain name.
     *
     * @example
     * rayihealth.cn
     */
    domainName?: string;
    /**
     * @remarks
     * The purpose of querying DNS configuration.
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
