import * as $dara from '@darabonba/typescript';
export declare class SaveAppSupabaseSecretsRequest extends $dara.Model {
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
     * The JSON string of the secrets list.
     *
     * @example
     * {"key":"abc"}
     */
    secretsJson?: string;
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
