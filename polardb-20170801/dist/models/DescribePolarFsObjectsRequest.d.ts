import * as $dara from '@darabonba/typescript';
export declare class DescribePolarFsObjectsRequest extends $dara.Model {
    /**
     * @remarks
     * The absolute path of the directory.
     *
     * This parameter is required.
     *
     * @example
     * /test
     */
    path?: string;
    /**
     * @remarks
     * The PolarFs instance ID.
     *
     * This parameter is required.
     *
     * @example
     * pfs-2ze0i74ka607*****
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
