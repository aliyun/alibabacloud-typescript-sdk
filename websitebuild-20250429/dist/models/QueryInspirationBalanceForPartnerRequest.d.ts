import * as $dara from '@darabonba/typescript';
export declare class QueryInspirationBalanceForPartnerRequest extends $dara.Model {
    /**
     * @remarks
     * The owner ID, which can be a website ID or an Alibaba Cloud account ID.
     *
     * @example
     * 123456
     */
    belongId?: string;
    /**
     * @remarks
     * The type of the owner ID. Valid values: siteId and uid.
     *
     * @example
     * USER
     */
    belongIdType?: string;
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
