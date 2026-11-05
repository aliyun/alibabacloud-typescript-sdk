import * as $dara from '@darabonba/typescript';
export declare class CreateRCImageResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * F8D78AED-5050-113C-A46E-7B346*******
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
