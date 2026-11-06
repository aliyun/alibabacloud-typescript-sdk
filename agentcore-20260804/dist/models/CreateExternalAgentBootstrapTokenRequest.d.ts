import * as $dara from '@darabonba/typescript';
export declare class CreateExternalAgentBootstrapTokenRequest extends $dara.Model {
    /**
     * @remarks
     * The access network type. Valid values: INTRANET (internal network) and INTERNET (Internet).
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
