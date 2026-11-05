import * as $dara from '@darabonba/typescript';
export declare class DeleteRCClusterNodesRequest extends $dara.Model {
    /**
     * @remarks
     * The list of instance IDs.
     */
    instanceIds?: string[];
    /**
     * @remarks
     * The node information.
     */
    nodes?: string[];
    /**
     * @remarks
     * The region ID.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The virtual private cloud (VPC) ID.
     *
     * > Reserved parameter.
     *
     * @example
     * None
     */
    vpcId?: string;
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
