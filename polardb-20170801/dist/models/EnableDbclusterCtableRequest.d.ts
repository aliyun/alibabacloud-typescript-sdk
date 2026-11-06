import * as $dara from '@darabonba/typescript';
export declare class EnableDBClusterCTableRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the cluster.
     *
     * This parameter is required.
     *
     * @example
     * pc-xxx
     */
    DBClusterId?: string;
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
