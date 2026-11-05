import * as $dara from '@darabonba/typescript';
export declare class ModifyRCVClusterRequest extends $dara.Model {
    /**
     * @remarks
     * This parameter is required.
     */
    clusterId?: string;
    /**
     * @remarks
     * This parameter is required.
     */
    regionId?: string;
    supportDiskPerformanceLevel?: string[];
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
