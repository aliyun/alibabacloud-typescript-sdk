import * as $dara from '@darabonba/typescript';
export declare class DescribeAIDBClusterTaskAttributeRequest extends $dara.Model {
    /**
     * @remarks
     * The task ID.
     *
     * @example
     * pm-2ze99***
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The query mode. Valid values:
     * * **RelatedAITask**: Queries the task details.
     *
     * @example
     * RelatedAITask
     */
    describeType?: string;
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The region ID.
     *
     * @example
     * cn-beijing
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
