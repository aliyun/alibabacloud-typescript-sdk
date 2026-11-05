import * as $dara from '@darabonba/typescript';
export declare class MovePolarFsObjectsRequestObjectsToMove extends $dara.Model {
    /**
     * @remarks
     * The destination path.
     *
     * @example
     * /test1
     */
    destinationPath?: string;
    /**
     * @remarks
     * The source path.
     *
     * @example
     * /test
     */
    sourcePath?: string;
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
export declare class MovePolarFsObjectsRequest extends $dara.Model {
    /**
     * @remarks
     * A list of files to move or rename.
     */
    objectsToMove?: MovePolarFsObjectsRequestObjectsToMove[];
    /**
     * @remarks
     * The PolarFs instance ID.
     *
     * @example
     * pfs-test*****
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
