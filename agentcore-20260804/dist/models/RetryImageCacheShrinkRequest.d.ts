import * as $dara from '@darabonba/typescript';
export declare class RetryImageCacheShrinkRequest extends $dara.Model {
    /**
     * @remarks
     * The request body for retrying image cache creation.
     */
    bodyShrink?: string;
    /**
     * @remarks
     * The non-empty request token passed as a query parameter. The current implementation does not guarantee deduplication or recovery of the original acceptance result based on this token.
     *
     * This parameter is required.
     *
     * @example
     * 550e8400-e29b-41d4-a716-446655440000
     */
    clientToken?: string;
    /**
     * @remarks
     * The product entry region. This parameter is passed as a query parameter and must be consistent with the selected region endpoint and the workspace region.
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
