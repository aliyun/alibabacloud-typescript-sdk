import * as $dara from '@darabonba/typescript';
export declare class VerifyAgenticDBTenantApiKeyRequest extends $dara.Model {
    /**
     * @remarks
     * The plaintext of the API key to validate.
     *
     * This parameter is required.
     *
     * @example
     * pagc_key_cGFnYy1icDFh...kX9mP2vL7wQ3
     */
    apiKey?: string;
    /**
     * @remarks
     * The region ID.
     *
     * This parameter is required.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
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
