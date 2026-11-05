import * as $dara from '@darabonba/typescript';
export declare class ModifyPolarFsMappingAuthResponseBody extends $dara.Model {
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * 2281C6C9-CBAB-1AFD-8400-670750CF6025_2212
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
