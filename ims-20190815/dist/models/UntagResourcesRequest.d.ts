import * as $dara from '@darabonba/typescript';
export declare class UntagResourcesRequest extends $dara.Model {
    /**
     * @remarks
     * Specifies whether to remove all tags from the resource. Valid values:
     *
     * - true: remove all tags from the resources.
     *
     * - false (default): does not remove all tags from the resources.
     *
     * > This parameter takes effect only when TagKey.N is not set in the request.
     *
     * @example
     * false
     */
    all?: boolean;
    /**
     * @remarks
     * The IDs of resources.
     *
     * Valid values of N: 1 to 50. If the ResourceType parameter is set to user, the resource ID is the ID of the RAM user.
     *
     * > You must specify only one of the following parameters: ResourceId and ResourcePrincipalName.
     *
     * @example
     * UntagResources
     */
    resourceId?: string[];
    /**
     * @remarks
     * The names of resources.
     *
     * Valid values of N: 1 to 50. If the ResourceType parameter is set to user, the resource name is the name of the RAM user.
     *
     * > You must specify only one of the following parameters: ResourceId and ResourcePrincipalName.
     */
    resourcePrincipalName?: string[];
    /**
     * @remarks
     * The type of the resource. Valid value:
     *
     * - user: a RAM user
     *
     * @example
     * user
     */
    resourceType?: string;
    /**
     * @remarks
     * The tag keys of resources.
     *
     * Valid values of N: 1 to 20. N must be consecutive.
     */
    tagKey?: string[];
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
