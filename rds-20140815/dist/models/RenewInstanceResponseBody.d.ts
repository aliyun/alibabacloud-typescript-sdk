import * as $dara from '@darabonba/typescript';
export declare class RenewInstanceResponseBody extends $dara.Model {
    /**
     * @remarks
     * The order ID.
     *
     * @example
     * 20181574543****
     */
    orderId?: number;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
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
