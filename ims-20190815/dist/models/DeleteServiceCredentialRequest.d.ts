import * as $dara from '@darabonba/typescript';
export declare class DeleteServiceCredentialRequest extends $dara.Model {
    /**
     * @remarks
     * The service credential ID.
     *
     * This parameter is required.
     *
     * @example
     * SC****************
     */
    serviceCredentialId?: string;
    /**
     * @remarks
     * The logon name of the Resource Access Management (RAM) user. If this parameter is not specified, the service credential of the identity that invokes this operation is deleted.
     *
     * @example
     * test@example.onaliyun.com
     *
     * **if can be null:**
     * false
     */
    userPrincipalName?: string;
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
