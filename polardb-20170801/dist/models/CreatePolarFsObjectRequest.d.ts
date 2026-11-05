import * as $dara from '@darabonba/typescript';
export declare class CreatePolarFsObjectRequest extends $dara.Model {
    /**
     * @remarks
     * The destination path.
     *
     * This parameter is required.
     *
     * @example
     * /test
     */
    path?: string;
    /**
     * @remarks
     * The PolarFS instance ID.
     *
     * This parameter is required.
     *
     * @example
     * pfs-2ze0i7*****
     */
    polarFsInstanceId?: string;
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
