import * as $dara from '@darabonba/typescript';
export declare class ListTagResourcesForRegionRequest extends $dara.Model {
    /**
     * @remarks
     * The token used to retrieve more results. You do not need to specify this parameter for the first query. If the first query does not return all results, you can pass the token returned in the previous response to retrieve the remaining results.
     *
     * @example
     * 212db86sca4384811e0b5e8707e******
     */
    nextToken?: string;
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The region ID.
     *
     * This parameter is required.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    /**
     * @remarks
     * The resource type. Valid values:
     *
     * - cluster: cluster instance
     * - aicluster: AI cluster instance
     *
     * @example
     * cluster
     */
    resourceType?: string;
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
