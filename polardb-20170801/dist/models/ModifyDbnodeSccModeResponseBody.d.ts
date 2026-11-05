import * as $dara from '@darabonba/typescript';
export declare class ModifyDBNodeSccModeResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * E2FDB684-751D-424D-98B9-704BEA******
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
