import * as $dara from '@darabonba/typescript';
export declare class DescribeAIDBClusterTasksRequest extends $dara.Model {
    /**
     * @remarks
     * The model operator type.
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
     * The number of items to display on each page.
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
     * The ID of the associated PolarDB cluster. This parameter is required. If you do not specify this parameter, the service returns the InvalidDBClusterId.NotFound (404) error.
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
