import * as $dara from '@darabonba/typescript';
export declare class DeleteAppDomainCertificateRequest extends $dara.Model {
    /**
     * @remarks
     * The business ID of the application instance.
     *
     * @example
     * 202506170003
     */
    bizId?: string;
    /**
     * @remarks
     * The domain name.
     *
     * @example
     * aliwmzs.com
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
