import * as $dara from '@darabonba/typescript';
export declare class ModifyDBProxyInstanceResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 65C55572-530E-4A53-BE03-1D08CAF0F046
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
