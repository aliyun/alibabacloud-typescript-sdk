import * as $dara from '@darabonba/typescript';
export declare class GetAppInstanceForAdminRequest extends $dara.Model {
    /**
     * @remarks
     * The business instance ID.
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
