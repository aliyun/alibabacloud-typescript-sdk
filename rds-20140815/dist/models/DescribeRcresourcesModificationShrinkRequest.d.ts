import * as $dara from '@darabonba/typescript';
export declare class DescribeRCResourcesModificationShrinkRequest extends $dara.Model {
    conditionssShrink?: string;
    cores?: number;
    /**
     * @remarks
     * This parameter is required.
     *
     * @example
     * InstanceType
     */
    destinationResource?: string;
    /**
     * @remarks
     * This parameter is required.
     */
    instanceId?: string;
    instanceType?: string;
    memory?: number;
    /**
     * @example
     * Upgrade
     */
    operationType?: string;
    /**
     * @remarks
     * This parameter is required.
     */
    regionId?: string;
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
