import * as $dara from '@darabonba/typescript';
export declare class CreateImageCacheRequestBody extends $dara.Model {
    /**
     * @remarks
     * Specifies whether to allow the use of the public network for the current source reading and transfer. At least one of this parameter and accessVpc must be set to true. The server validates the access conditions of the current workspace.
     *
     * This parameter is required.
     *
     * @example
     * false
     */
    accessInternet?: boolean;
    /**
     * @remarks
     * Specifies whether to allow the use of a VPC for the current source reading and transfer. At least one of this parameter and accessInternet must be set to true. The server resolves the trusted network of the current workspace and does not modify the runtime network of the agent.
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
     * The request body for creating an image cache.
     *
     * This parameter is required.
     */
    body?: CreateImageCacheRequestBody;
    /**
     * @remarks
     * The non-empty request identifier passed as a query parameter. The current implementation does not guarantee deduplication by this identifier or recovery of the original acceptance result.
     *
     * This parameter is required.
     *
     * @example
     * 550e8400-e29b-41d4-a716-446655440000
     */
    clientToken?: string;
    /**
     * @remarks
     * The product entry region, passed as a query parameter. It must match the selected region endpoint and the workspace region.
     *
     * This parameter is required.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The workspace ID.
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
