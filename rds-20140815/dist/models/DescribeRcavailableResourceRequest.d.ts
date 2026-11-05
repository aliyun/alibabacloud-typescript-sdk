import * as $dara from '@darabonba/typescript';
export declare class DescribeRCAvailableResourceRequest extends $dara.Model {
    cores?: number;
    dataDiskCategory?: string;
    dedicatedHostId?: string;
    /**
     * @remarks
     * This parameter is required.
     */
    destinationResource?: string;
    instanceChargeType?: string;
    instanceType?: string;
    ioOptimized?: string;
    memory?: number;
    networkCategory?: string;
    /**
     * @remarks
     * This parameter is required.
     */
    regionId?: string;
    resourceType?: string;
    scope?: string;
    spotDuration?: number;
    spotStrategy?: string;
    supportCase?: string;
    systemDiskCategory?: string;
    zoneId?: string;
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
