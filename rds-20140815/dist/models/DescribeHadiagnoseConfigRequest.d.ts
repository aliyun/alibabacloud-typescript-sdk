import * as $dara from '@darabonba/typescript';
export declare class DescribeHADiagnoseConfigRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the instance. You can call the DescribeDBInstances operation to obtain the instance ID.
     *
     * This parameter is required.
     *
     * @example
     * rm-uf6wjk5****
     */
    DBInstanceId?: string;
    ownerId?: number;
    /**
     * @remarks
     * The region ID. You can call the DescribeRegions operation to obtain the region ID.
     *
     * This parameter is required.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
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
