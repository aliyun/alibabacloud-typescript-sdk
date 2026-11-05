import * as $dara from '@darabonba/typescript';
export declare class CreateImageCacheShrinkRequest extends $dara.Model {
    /**
     * @remarks
     * The business parameters for creating an image cache.
     *
     * This parameter is required.
     */
    bodyShrink?: string;
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
