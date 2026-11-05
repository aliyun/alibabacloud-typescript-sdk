import * as $dara from '@darabonba/typescript';
export declare class SubmitAppSeoIndexRequest extends $dara.Model {
    /**
     * @remarks
     * The business ID.
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
    /**
     * @remarks
     * The search engine type.
     *
     * @example
     * type
     */
    seType?: string;
    /**
     * @remarks
     * Specifies whether to delay the submission.
     */
    submitLater?: boolean;
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
