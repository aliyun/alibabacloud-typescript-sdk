import * as $dara from '@darabonba/typescript';
export declare class TreeNode extends $dara.Model {
    /**
     * @remarks
     * The list of child nodes.
     */
    children?: TreeNode[];
    /**
     * @remarks
     * The final step number.
     *
     * @example
     * 1
     */
    finalStepNo?: number;
    /**
     * @remarks
     * The completion time.
     */
    finishTime?: number;
    /**
     * @remarks
     * Specifies whether the node is a container node.
     */
    isContainerNode?: boolean;
    /**
     * @remarks
     * The node ID.
     *
     * @example
     * 2927b500-c4e2-4241-bacf-0a2991c4be12
     */
    nodeId?: string;
    /**
     * @remarks
     * The node name.
     *
     * @example
     * Single output
     */
    nodeName?: string;
    /**
     * @remarks
     * The node status.
     *
     * @example
     * UP
     */
    nodeStatus?: string;
    /**
     * @remarks
     * The operator role.
     *
     * @example
     * System
     */
    operatorRole?: string;
    /**
     * @remarks
     * The parent node ID.
     *
     * @example
     * dpYLaezmVNRMGX56Cg4gLjrrVrMqPxX6
     */
    parentNodeId?: string;
    /**
     * @remarks
     * The step number.
     *
     * @example
     * 1
     */
    stepNo?: number;
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
