import * as $dara from '@darabonba/typescript';
export declare class MigrateSecurityIPModeResponseBody extends $dara.Model {
    /**
     * @remarks
     * The instance ID.
     *
     * @example
     * rm-uf6wjk5****
     */
    DBInstanceId?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * EF1E53AB-5625-49C7-ADF1-FBD0B6640D19
     */
    requestId?: string;
    /**
     * @remarks
     * The whitelist mode after the switch, which is the enhanced whitelist mode.
     *
     * @example
     * safety
     */
    securityIPMode?: string;
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
