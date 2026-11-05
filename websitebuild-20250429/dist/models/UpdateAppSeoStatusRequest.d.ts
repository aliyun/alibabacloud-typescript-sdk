import * as $dara from '@darabonba/typescript';
export declare class UpdateAppSeoStatusRequest extends $dara.Model {
    /**
     * @remarks
     * The business ID.
     *
     * @example
     * WS20250801154628000001
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
     * The authentication information.
     *
     * Security authentication information.
     *
     * @example
     * 123123
     */
    seAuthInfo?: string;
    /**
     * @remarks
     * The index status.
     *
     * @example
     * 0
     */
    seIndexStatus?: number;
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
