import * as $dara from '@darabonba/typescript';
export declare class CreateExternalAgentBootstrapTokenRequest extends $dara.Model {
    /**
     * @remarks
     * The network type for access. Valid values: INTRANET (internal network) and INTERNET (Internet).
     *
     * This parameter is required.
     *
     * @example
     * INTERNET
     */
    networkType?: string;
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
