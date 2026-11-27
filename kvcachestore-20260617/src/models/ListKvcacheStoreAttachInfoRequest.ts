// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKVCacheStoreAttachInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The list of KvcsIds of the KVCacheStores to query. You can specify up to 100 KvcsIds.
   * 
   * This parameter is required.
   */
  kvcsIds?: string[];
  /**
   * @remarks
   * The maximum number of entries to return in a single query. Valid values: 1 to 500.
   * 
   * Default value: 10.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The query token. Set the value to the NextToken value returned from the previous call. You do not need to specify this parameter for the first call. If NextToken is specified, the PageSize and PageNumber request parameters become invalid, and the TotalCount value in the response is invalid.
   * 
   * @example
   * your-client-token
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number for paging. This parameter is used together with PageSize for a paged query. If the specified page number exceeds the total number of pages, the last page is returned.
   * 
   * @example
   * 6
   */
  pageNumber?: number;
  /**
   * @remarks
   * The settings for the number of entries per page for paging in a paged query.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID, such as cn-hangzhou.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the compute-side VSC. If you specify this parameter, the mount records are filtered by the specified VSC.
   * 
   * @example
   * vsc-dhag651dsda
   */
  vscId?: string;
  static names(): { [key: string]: string } {
    return {
      kvcsIds: 'KvcsIds',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      vscId: 'VscId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kvcsIds: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      vscId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.kvcsIds)) {
      $dara.Model.validateArray(this.kvcsIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

