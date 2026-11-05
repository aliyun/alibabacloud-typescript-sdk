import * as $dara from '@darabonba/typescript';
export declare class UpdateAppSupabaseSecretRequest extends $dara.Model {
    /**
     * @remarks
     * The business ID.
     *
     * @example
     * WS20250731233102000001
     */
    bizId?: string;
    /**
     * @remarks
     * The secret key.
     *
     * @example
     * ***
     */
    secretKey?: string;
    /**
     * @remarks
     * The secret name.
     *
     * @example
     * 277356_pre_auth
     */
    secretName?: string;
    /**
     * @remarks
     * The secret type.
     *
     * @example
     * Opaque
     */
    secretType?: string;
    /**
     * @remarks
     * The secret value.
     *
     * @example
     * 1231
     */
    secretValue?: string;
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
