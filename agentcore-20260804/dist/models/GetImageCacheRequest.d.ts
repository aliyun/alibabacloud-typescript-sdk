import * as $dara from '@darabonba/typescript';
export declare class GetImageCacheRequest extends $dara.Model {
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
