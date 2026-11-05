import * as $dara from '@darabonba/typescript';
export declare class ModifyAutoRenewAttributeResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 4CE6DF97-AEA4-484F-906F-C407EE******
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
