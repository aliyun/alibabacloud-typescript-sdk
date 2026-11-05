import * as $dara from '@darabonba/typescript';
export declare class GetIcpFilingInfoForPartnerRequest extends $dara.Model {
    /**
     * @remarks
     * The customer business ID.
     *
     * @example
     * WD20250703155602000001
     */
    bizId?: string;
    /**
     * @remarks
     * The domain name.
     *
     * @example
     * yjdw.bpu.edu.cn-waf
     */
    domain?: string;
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
