import * as $dara from '@darabonba/typescript';
export declare class AddPolarFsPathMappingResponseBody extends $dara.Model {
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * CDB3258F-B5DE-43C4-8935-CBA0CA******
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
