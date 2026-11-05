import * as $dara from '@darabonba/typescript';
export declare class DeprovisionExternalApplicationRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the external application installed for the current account. You can obtain the ID by calling ListExternalApplications or ListApplicationProvisionInfos with SourceType set to external. If the application is not installed, you must first call ProvisionExternalApplication.
     *
     * This parameter is required.
     *
     * @example
     * 417273362044613****
     */
    appId?: string;
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
