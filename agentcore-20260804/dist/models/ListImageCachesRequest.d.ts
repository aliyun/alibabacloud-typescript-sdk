import * as $dara from '@darabonba/typescript';
export declare class ListImageCachesRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the source ACR Enterprise instance. The match must be exact. Empty strings (strings containing no characters) are invalid.
     *
     * @example
     * cri-example
     */
    acrInstanceId?: string;
    /**
     * @remarks
     * The image digest.
     *
     * @example
     * sha256:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
     */
    digest?: string;
    /**
     * @remarks
     * Performs a case-insensitive literal substring search on the full source image reference in the registry/repository:tag format. The repository already includes the namespace. If the value is empty after trimming leading and trailing whitespace, it is treated as not provided. Percent signs, underscores, and backslashes are treated as literal characters.
     *
     * @example
     * team/app
     */
    imageRefContains?: string;
    /**
     * @remarks
     * The maximum number of results to return. Default value: 20. If explicitly specified, the value must be an integer from 1 to 100. Otherwise, an InvalidMaxResults error is returned. When paginating, this value must remain the same as the previous page.
     *
     * @example
     * 20
     */
    maxResults?: number;
    /**
     * @remarks
     * The source namespace. The match is case-sensitive and exact. Empty strings are invalid.
     *
     * @example
     * team
     */
    namespace?: string;
    /**
     * @remarks
     * Omit this parameter for the first request. For subsequent requests, pass the nextToken from the previous response as is. When paginating, you must keep the filter conditions and maxResults consistent. If you change any of these, you must query the first page again.
     *
     * @example
     * opaque-token
     */
    nextToken?: string;
    /**
     * @remarks
     * The product entry region. This parameter is passed as a query parameter and must match the selected region endpoint and the workspace region.
     *
     * This parameter is required.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The domain name of the source registry. The match is exact and case-insensitive. Do not include the protocol, path, or tag. Public network and VPC domain names are not considered equal. Empty strings are invalid.
     *
     * @example
     * example-registry.cn-hangzhou.cr.aliyuncs.com
     */
    registry?: string;
    /**
     * @remarks
     * The repository name under the namespace. The match is case-sensitive and exact. Do not include the namespace. If this parameter is specified, the namespace parameter must also be provided. Empty strings are invalid.
     *
     * @example
     * app
     */
    repository?: string;
    /**
     * @remarks
     * Filters by a single cache status. Omit this parameter to query all statuses.
     *
     * @example
     * READY
     */
    status?: string;
    /**
     * @remarks
     * The source image tag. The match is case-sensitive and exact. The latest tag is not inferred. Empty strings are invalid.
     *
     * @example
     * v1
     */
    tag?: string;
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
