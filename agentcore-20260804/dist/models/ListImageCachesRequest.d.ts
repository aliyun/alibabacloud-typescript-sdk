import * as $dara from '@darabonba/typescript';
export declare class ListImageCachesRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the source ACR Enterprise instance. The match must be exact. An empty string (a string with no characters) is invalid.
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
     * Performs a case-insensitive literal substring search on the full source image reference in the format of registry/repository:tag. The repository already includes the namespace. If the value is empty after trimming leading and trailing whitespace, it is treated as not provided. Percent signs, underscores, and backslashes are treated as literal characters.
     *
     * @example
     * team/app
     */
    imageRefContains?: string;
    /**
     * @remarks
     * The maximum number of results to return. Default value: 20. If you explicitly specify this parameter, the value must be an integer from 1 to 100. Otherwise, an InvalidMaxResults error is returned. When you paginate, this value must remain the same as the previous page.
     *
     * @example
     * 20
     */
    maxResults?: number;
    /**
     * @remarks
     * The source namespace. The match is case-sensitive and must be exact. An empty string is invalid.
     *
     * @example
     * team
     */
    namespace?: string;
    /**
     * @remarks
     * The pagination token. Omit this parameter for the first request. For subsequent requests, pass the nextToken value returned in the previous response as is. When you paginate, you must keep the filter conditions and maxResults unchanged. If you change any of these parameters, you must query the first page again.
     *
     * @example
     * opaque-token
     */
    nextToken?: string;
    /**
     * @remarks
     * The region ID. The region ID must be passed as a query parameter and must match the selected region endpoint and the workspace region.
     *
     * This parameter is required.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The domain name of the source registry. The match is case-insensitive and must be exact. Do not include the protocol, path, or tag. Public network and VPC domain names are not considered equal. An empty string is invalid.
     *
     * @example
     * example-registry.cn-hangzhou.cr.aliyuncs.com
     */
    registry?: string;
    /**
     * @remarks
     * The repository name under the namespace. The match is case-sensitive and must be exact. Do not include the namespace. If you specify this parameter, you must also specify the namespace. An empty string is invalid.
     *
     * @example
     * app
     */
    repository?: string;
    /**
     * @remarks
     * The cache status used to filter the results. To query all caches, omit this parameter.
     *
     * @example
     * READY
     */
    status?: string;
    /**
     * @remarks
     * The source image tag. The match is case-sensitive and must be exact. The latest tag is not inferred. An empty string is invalid.
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
