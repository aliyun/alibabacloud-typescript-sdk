import * as $dara from '@darabonba/typescript';
export declare class GetAppSupabaseAuthConfigRequest extends $dara.Model {
    /**
     * @remarks
     * The authentication type.
     *
     * @example
     * ALL_AUTH_FLAG
     */
    authType?: string;
    /**
     * @remarks
     * The business ID.
     *
     * @example
     * WS20250801152639000005
     */
    bizId?: string;
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
