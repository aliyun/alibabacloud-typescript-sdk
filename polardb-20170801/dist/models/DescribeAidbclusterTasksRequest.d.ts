import * as $dara from '@darabonba/typescript';
export declare class DescribeAIDBClusterTasksRequest extends $dara.Model {
    /**
     * @remarks
     * The type of the model operator.
     *
     * @example
     * aitrain
     */
    kubeType?: string;
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The current page number.
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of entries per page.
     *
     * @example
     * 30
     */
    pageSize?: number;
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
     * The instance ID of the associated PolarDB instance.
     *
     * @example
     * pc-2ze88***
     */
    relativeDBClusterId?: string;
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
