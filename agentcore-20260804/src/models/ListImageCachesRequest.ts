// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListImageCachesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the source ACR Enterprise instance. The match must be exact. Empty character strings are invalid.
   * 
   * @example
   * cri-example
   */
  acrInstanceId?: string;
  /**
   * @remarks
   * The complete image digest in the sha256: format followed by a 64-character lowercase hexadecimal string. The format is verified by the console. The match must be exact, and prefixes are not supported.
   * 
   * @example
   * sha256:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
   */
  digest?: string;
  /**
   * @remarks
   * Performs a case-insensitive literal substring search on the complete source image reference in the registry/repository:tag format, where the repository already includes the namespace. If the value is empty after trimming leading and trailing whitespace, it is treated as not provided. Percent signs, underscores, and backslashes are treated as literal characters.
   * 
   * @example
   * team/app
   */
  imageRefContains?: string;
  /**
   * @remarks
   * The maximum number of results to return. If this parameter is not provided or is set to 0, the default value is 20. If the value exceeds 100, it is treated as 100. Negative values return an InvalidMaxResults error. The value can be adjusted for subsequent pages.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The source namespace. The match is case-sensitive and must be exact. Empty strings are invalid.
   * 
   * @example
   * team
   */
  namespace?: string;
  /**
   * @remarks
   * Omit this parameter for the first request. For subsequent requests, pass the nextToken value from the previous response exactly as returned. If the filter conditions change, you must query the first page again.
   * 
   * @example
   * opaque-token
   */
  nextToken?: string;
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
   * The domain name of the source repository. The match is case-insensitive and must be exact. Do not include the protocol, path, or tag. Public network and VPC domain names are not considered equal. Empty strings are invalid.
   * 
   * @example
   * example-registry.cn-hangzhou.cr.aliyuncs.com
   */
  registry?: string;
  /**
   * @remarks
   * The name of the repository under the namespace. The match is case-sensitive and must be exact. Do not include the namespace. If this parameter is provided, the namespace parameter must also be provided. Empty strings are invalid.
   * 
   * @example
   * app
   */
  repository?: string;
  /**
   * @remarks
   * Filters the results by a single cache status. Omit this parameter to query all statuses.
   * 
   * @example
   * READY
   */
  status?: string;
  /**
   * @remarks
   * The tag of the source image. The match is case-sensitive and must be exact. The latest tag is not inferred. Empty strings are invalid.
   * 
   * @example
   * v1
   */
  tag?: string;
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
  static names(): { [key: string]: string } {
    return {
      acrInstanceId: 'acrInstanceId',
      digest: 'digest',
      imageRefContains: 'imageRefContains',
      maxResults: 'maxResults',
      namespace: 'namespace',
      nextToken: 'nextToken',
      regionId: 'regionId',
      registry: 'registry',
      repository: 'repository',
      status: 'status',
      tag: 'tag',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acrInstanceId: 'string',
      digest: 'string',
      imageRefContains: 'string',
      maxResults: 'number',
      namespace: 'string',
      nextToken: 'string',
      regionId: 'string',
      registry: 'string',
      repository: 'string',
      status: 'string',
      tag: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

