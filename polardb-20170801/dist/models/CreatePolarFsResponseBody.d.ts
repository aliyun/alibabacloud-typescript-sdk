import * as $dara from '@darabonba/typescript';
export declare class CreatePolarFsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The order ID.
     *
     * @example
     * 2035638*******
     */
    orderId?: string;
    /**
     * @remarks
     * The PolarFS instance ID.
     *
     * @example
     * pfs-2ze0i74ka607wck3
     */
    polarFsInstanceId?: string;
    /**
     * @remarks
     * The PolarFS file system path.
     *
     * @example
     * pfs-xxx*******
     */
    polarFsPath?: string;
    /**
     * @remarks
     * The PolarFS instance status.
     *
     * @example
     * Creating
     */
    polarFsStatus?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * CED079B7-A408-41A1-BFF1-EC608E******
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
