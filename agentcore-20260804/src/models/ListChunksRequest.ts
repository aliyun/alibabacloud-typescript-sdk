// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChunksRequest extends $dara.Model {
  /**
   * @remarks
   * The asset ID. This parameter is optional. If specified, only chunks in the current published generation of the asset are queried. If omitted, the entire knowledge base is queried.
   * 
   * @example
   * asset-001
   */
  assetId?: string;
  /**
   * @remarks
   * Specifies whether to filter by enabled status. Valid values:
   * - true: Queries only enabled chunks.
   * - false: Queries only disabled chunks.
   * If this parameter is omitted, chunks are not filtered by enabled status.
   */
  enabled?: boolean;
  /**
   * @remarks
   * The keyword used to filter chunk content. The maximum length is 1,024 characters. This parameter is allowed only when assetId is specified. Otherwise, an InvalidParameter error is returned.
   * 
   * @example
   * Product documentation
   */
  keyword?: string;
  /**
   * @remarks
   * The maximum number of results to return per page. Valid values: 0 to 100. If this parameter is omitted or set to 0, the default value 20 is used.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token returned in the previous response for pagination. The token is bound to the tenant, workspace, knowledge base, filter conditions, and sorting, and cannot be reused across different scopes. If assetId is specified, the token is also bound to the current publish result. A VersionConflict (409) error is returned if the publish result changes. Cross-asset pagination is sorted by assetId and chunkSeq, and a full-base snapshot is not guaranteed.
   * 
   * @example
   * opaque-next-token
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      assetId: 'assetId',
      enabled: 'enabled',
      keyword: 'keyword',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetId: 'string',
      enabled: 'boolean',
      keyword: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

