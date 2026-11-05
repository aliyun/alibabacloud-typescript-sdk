import * as $dara from '@darabonba/typescript';
export declare class GetAppSeoStatusRequest extends $dara.Model {
    /**
     * @remarks
     * The business ID.
     *
     * @example
     * WD20250814102215000001
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
    /**
     * @remarks
     * The search engine type.
     *
     * @example
     * type
     */
    seType?: string;
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
