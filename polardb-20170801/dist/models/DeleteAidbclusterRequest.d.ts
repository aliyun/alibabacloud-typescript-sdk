import * as $dara from '@darabonba/typescript';
export declare class DeleteAIDBClusterRequest extends $dara.Model {
    /**
     * @remarks
     * The AI cluster ID.
     *
     * This parameter is required.
     *
     * @example
     * pc-**************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The model operator space.
     *
     * @example
     * pms-xxx
     */
    modelSpace?: string;
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
