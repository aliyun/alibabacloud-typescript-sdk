import * as $dara from '@darabonba/typescript';
export declare class DescribeRCInstanceDdosCountRequest extends $dara.Model {
    /**
     * @remarks
     * The region ID of the public IP address asset to query.
     *
     * @example
     * cn-beijing
     */
    ddosRegionId?: string;
    /**
     * @remarks
     * The instance type of the public IP address asset to query. Set the value to **ecs**.
     *
     * @example
     * ecs
     */
    instanceType?: string;
    /**
     * @remarks
     * The region ID of the RDS Custom instance.
     *
     * @example
     * cn-beijing
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
