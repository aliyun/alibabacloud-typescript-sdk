import * as $dara from '@darabonba/typescript';
export declare class RemoveRCInstancesFromDeploymentSetRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the deployment set.
     *
     * This parameter is required.
     *
     * @example
     * ds-uf6c8qerk019bj1l****
     */
    deploymentSetId?: string;
    /**
     * @remarks
     * The instance IDs.
     *
     * This parameter is required.
     *
     * @example
     * rc-sff,rc-err
     */
    RCInstanceIds?: string;
    /**
     * @remarks
     * The region ID. You can call the DescribeRegions operation to query the region ID.
     *
     * This parameter is required.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
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
