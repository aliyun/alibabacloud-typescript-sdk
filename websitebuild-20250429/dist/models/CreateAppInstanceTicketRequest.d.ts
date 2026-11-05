import * as $dara from '@darabonba/typescript';
export declare class CreateAppInstanceTicketRequest extends $dara.Model {
    /**
     * @remarks
     * The customer business ID.
     *
     * @example
     * WS20250801154628000001
     */
    bizId?: string;
    /**
     * @remarks
     * The client ID of the device whose access credentials need to be revoked.
     *
     * @example
     * d566aaf2-7c88-40a4-982f-6abef0be13c9
     */
    clientId?: string;
    /**
     * @remarks
     * The user role that the ticket will assume.
     */
    role?: string;
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
