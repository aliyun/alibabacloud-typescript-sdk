import * as $dara from '@darabonba/typescript';
export declare class UnbindAppDomainRequest extends $dara.Model {
    /**
     * @remarks
     * The business ID.
     *
     * @example
     * WD20250908140837000001
     */
    bizId?: string;
    /**
     * @remarks
     * The domain name.
     *
     * @example
     * conway.cn
     */
    domainName?: string;
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
