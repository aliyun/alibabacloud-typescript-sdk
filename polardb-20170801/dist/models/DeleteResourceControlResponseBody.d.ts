import * as $dara from '@darabonba/typescript';
export declare class DeleteResourceControlResponseBody extends $dara.Model {
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * A7E6A8FD-C50B-46B2-BA85-D8B8D3******
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
