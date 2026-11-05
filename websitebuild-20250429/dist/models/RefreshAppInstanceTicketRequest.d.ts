import * as $dara from '@darabonba/typescript';
export declare class RefreshAppInstanceTicketRequest extends $dara.Model {
    /**
     * @remarks
     * The business ID of the application instance.
     *
     * @example
     * WD20250703155602000001
     */
    bizId?: string;
    /**
     * @remarks
     * The updated token information.
     *
     * @example
     * ***
     */
    token?: string;
    /**
     * @remarks
     * The UUID of the server.
     *
     * @example
     * c5c354d7-5e68-443a-b7fc-767e6ede9deb
     */
    uuid?: string;
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
