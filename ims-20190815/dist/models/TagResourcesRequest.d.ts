import * as $dara from '@darabonba/typescript';
export declare class TagResourcesRequestTag extends $dara.Model {
    /**
     * @remarks
     * The key of tag N.
     *
     * Valid values of N: 1 to 20. You cannot specify empty strings as tag keys. The tag key can be up to 128 characters in length. The tag key cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.
     *
     * @example
     * operator
     */
    key?: string;
    /**
     * @remarks
     * The value of tag N.
     *
     * Valid values of N: 1 to 20. The tag value can be an empty string. The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`.
     *
     * @example
     * alice
     */
    value?: string;
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
export declare class TagResourcesRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of resource N.
     *
     * Valid values of N: 1 to 50. If the ResourceType parameter is set to user, the resource ID is the ID of the RAM user.
     *
     * > You must specify only one of the following parameters: `ResourceId` and `ResourcePrincipalName`.
     */
    resourceId?: string[];
    /**
     * @remarks
     * The name of resource N.
     *
     * Valid values of N: 1 to 50. If the ResourceType parameter is set to user, the resource name is the name of the RAM user.
     *
     * > You must specify only one of the following parameters: `ResourceId` and `ResourcePrincipalName`.
     *
     * @example
     * TagResources
     */
    resourcePrincipalName?: string[];
    /**
     * @remarks
     * The type of the resource. Valid value:
     *
     * - user: a Resource Access Management (RAM) user.
     *
     * @example
     * user
     */
    resourceType?: string;
    /**
     * @remarks
     * The key of tag N.
     *
     * Valid values of N: 1 to 20. You cannot specify empty strings as tag keys. The tag key can be up to 128 characters in length. The tag key cannot start with aliyun or acs: and cannot contain `http://` or `https://`.
     */
    tag?: TagResourcesRequestTag[];
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
