import * as $dara from '@darabonba/typescript';
export declare class DeletePolarFsObjectsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The PolarLakebase instance ID.
     *
     * @example
     * pfs-2ze0i7*****
     */
    polarFsInstanceId?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * C890995A-CF06-4F4D-8DB8-DD26C2******
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
