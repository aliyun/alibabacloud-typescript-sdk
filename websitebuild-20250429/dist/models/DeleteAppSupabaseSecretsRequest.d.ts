import * as $dara from '@darabonba/typescript';
export declare class DeleteAppSupabaseSecretsRequest extends $dara.Model {
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
     * The JSON list of keys to be deleted.
     *
     * @example
     * {"key":"key"}
     */
    keysJson?: string;
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
