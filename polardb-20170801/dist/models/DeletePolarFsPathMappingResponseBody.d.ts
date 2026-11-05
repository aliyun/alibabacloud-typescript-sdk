import * as $dara from '@darabonba/typescript';
export declare class DeletePolarFsPathMappingResponseBody extends $dara.Model {
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * 7E2FE3BB-C677-5FF9-9FC5-9CF364BD6BE5
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
