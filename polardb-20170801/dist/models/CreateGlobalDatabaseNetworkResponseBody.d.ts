import * as $dara from '@darabonba/typescript';
export declare class CreateGlobalDatabaseNetworkResponseBody extends $dara.Model {
    /**
     * @remarks
     * The ID of the GDN.
     *
     * @example
     * gd-m5ex5wqfqbou*****
     */
    GDNId?: string;
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * C61892A4-0850-4516-9E26-44D96C1782DE
     */
    requestId?: string;
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
