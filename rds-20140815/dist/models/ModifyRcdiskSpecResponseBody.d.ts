import * as $dara from '@darabonba/typescript';
export declare class ModifyRCDiskSpecResponseBody extends $dara.Model {
    /**
     * @remarks
     * The ID of the order.
     *
     * @example
     * 24505392472****
     */
    orderId?: number;
    /**
     * @remarks
     * The ID of the request.
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
