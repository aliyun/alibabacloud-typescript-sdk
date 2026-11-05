import * as $dara from '@darabonba/typescript';
export declare class GetImageCacheRequest extends $dara.Model {
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
