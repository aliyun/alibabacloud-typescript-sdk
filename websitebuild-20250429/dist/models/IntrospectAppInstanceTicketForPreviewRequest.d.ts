import * as $dara from '@darabonba/typescript';
export declare class IntrospectAppInstanceTicketForPreviewRequest extends $dara.Model {
    /**
     * @remarks
     * Business ID
     *
     * @example
     * WS12345678
     */
    bizId?: string;
    /**
     * @remarks
     * Password-free login access token
     *
     * @example
     * ogxMqT04nnZOqdIqJZldbm-ZNsAVDz5mcqdCSudfX0SL61jjyWfV-ZnAO-OVpCt_aDl8xaaIO1OVkuvEcMn-HR_QddvaxMqIdsMY1cHdD4SDiRfOBGNdnpSdX9gG_Hi_.ab9c10816d913b51d87520ce0a72b2970668144c552689e9d9e211eb4529f0ea
     */
    token?: string;
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
