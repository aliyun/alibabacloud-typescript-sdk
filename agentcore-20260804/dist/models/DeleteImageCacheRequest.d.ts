import * as $dara from '@darabonba/typescript';
export declare class DeleteImageCacheRequest extends $dara.Model {
    /**
     * @remarks
     * The region ID of the service endpoint, which is determined by the selected regional endpoint.
     *
     * This parameter is required.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The ID of the current workspace. The server verifies the account, region, and resource ownership. This parameter cannot be omitted or used to access other workspaces.
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
