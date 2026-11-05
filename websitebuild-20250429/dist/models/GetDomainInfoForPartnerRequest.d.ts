import * as $dara from '@darabonba/typescript';
export declare class GetDomainInfoForPartnerRequest extends $dara.Model {
    /**
     * @remarks
     * The customer business ID.
     *
     * This parameter is required.
     *
     * @example
     * WD20250814102215000001
     */
    bizId?: string;
    /**
     * @remarks
     * The domain name.
     *
     * This parameter is required.
     *
     * @example
     * yywq.qimengwenhua.com
     */
    domainName?: string;
    /**
     * @remarks
     * The Alibaba Cloud account ID.
     *
     * This parameter is required.
     *
     * @example
     * 123456789
     */
    userId?: string;
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
