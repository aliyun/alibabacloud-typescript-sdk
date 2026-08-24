// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKVCacheStoreAttachInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The list of KVCacheStore KvcsId values to query. A maximum of 100 values can be specified.
   * 
   * This parameter is required.
   */
  kvcsIds?: string[];
  /**
   * @remarks
   * The maximum number of entries to return in a single request. Valid values: 1 to 500.
   * 
   * Default value: 10.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Set this parameter to the NextToken value returned in the previous call. You do not need to set this parameter for the first request. If you set NextToken, the PageSize and PageNumber request parameters become ineffective, and the TotalCount value in the response is invalid.
   * 
   * @example
   * your-client-token
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number for a paged query. Used together with PageSize. If the value exceeds the total number of pages, the last page of data is returned.
   * 
   * @example
   * 6
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for a paged query.
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
  static names(): { [key: string]: string } {
    return {
      kvcsIds: 'KvcsIds',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
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

