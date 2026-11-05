import * as $dara from '@darabonba/typescript';
export declare class CreateColdStorageInstanceResponseBody extends $dara.Model {
    /**
     * @remarks
     * The ID of the cold storage instance.
     *
     * @example
     * pcs_2zeth2gf4i83e578t
     */
    coldStorageInstanceId?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * F6EBB4ED-D12F-5F49-824C-9DD9C0EC4CF2
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
