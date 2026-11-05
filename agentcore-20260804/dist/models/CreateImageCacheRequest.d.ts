import * as $dara from '@darabonba/typescript';
export declare class CreateImageCacheRequestBody extends $dara.Model {
    /**
     * @remarks
     * Specifies whether to allow the use of the public network for the current source read and transfer. At least one of this parameter and accessVpc must be set to true. The server verifies the access conditions of the current workspace.
     *
     * This parameter is required.
     *
     * @example
     * false
     */
    accessInternet?: boolean;
    /**
     * @remarks
     * Specifies whether to allow the use of a VPC for the current source read and transfer. At least one of this parameter and accessInternet must be set to true. The server parses the trusted network of the current workspace and does not modify the agent runtime network.
     *
     * This parameter is required.
     *
     * @example
     * true
     */
    accessVpc?: boolean;
    /**
     * @remarks
     * The ID of the source ACR Enterprise instance.
     *
     * This parameter is required.
     *
     * @example
     * cri-example
     */
    acrInstanceId?: string;
    /**
     * @remarks
     * The namespace of the source ACR.
     *
     * This parameter is required.
     *
     * @example
     * team
     */
    namespace?: string;
    /**
     * @remarks
     * The name of the repository under the namespace. Do not include the namespace in the repository name.
     *
     * This parameter is required.
     *
     * @example
     * app
     */
    repository?: string;
    /**
     * @remarks
     * The selected tag of the source image.
     *
     * This parameter is required.
     *
     * @example
     * v1
     */
    tag?: string;
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
export declare class CreateImageCacheRequest extends $dara.Model {
    /**
     * @remarks
     * The business parameters for creating an image cache.
     *
     * This parameter is required.
     */
    body?: CreateImageCacheRequestBody;
    /**
     * @remarks
     * Required and non-empty. This parameter is reserved for API compatibility. It currently does not provide request deduplication or original result recovery based on this field. If a timeout occurs or the result is unconfirmed, query the cache status first before deciding whether to resubmit.
     *
     * This parameter is required.
     *
     * @example
     * 550e8400-e29b-41d4-a716-446655440000
     */
    clientToken?: string;
    /**
     * @remarks
     * The product entry region, which is determined by the selected region endpoint.
     *
     * This parameter is required.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The current routed workspace. The server verifies the account, region, and resource ownership. This parameter cannot be omitted or used to access other workspaces.
     *
     * This parameter is required.
     *
     * @example
     * ws-example
     */
    workspaceId?: string;
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
