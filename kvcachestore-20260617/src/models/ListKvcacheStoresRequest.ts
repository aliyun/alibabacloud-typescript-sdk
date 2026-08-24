// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKVCacheStoresRequest extends $dara.Model {
  /**
   * @remarks
   * The list of KvcsId values. Separate multiple IDs with commas. A maximum of 100 IDs are supported.
   * 
   * @example
   * kvcs-87djda131
   */
  kvcsIds?: string;
  /**
   * @remarks
   * The maximum number of entries per page for cursor-based pagination. Default value: 10. Maximum value: 100. This parameter is used together with NextToken.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The instance name filter. Prefix matching is used.
   * 
   * @example
   * obj-detect
   */
  name?: string;
  /**
   * @remarks
   * The pagination token. Do not specify this parameter for the first request. For subsequent requests, use the NextToken value returned in the previous response. This parameter is mutually exclusive with PageNumber.
   * 
   * @example
   * a24c3a9cc8e6da77b10cffc4c93c7922e0b5e8707e68181f
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number. Default value: 1. This parameter takes precedence over NextToken if both are specified.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 100. This parameter is used together with PageNumber.
   * 
   * @example
   * 10
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
   * The instance status filter. Valid values: Creating, Available, InUse, Stopping, Stopped, and Deleting.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The zone ID, such as cn-hangzhou-a.
   * 
   * @example
   * cn-hangzhou-k
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      kvcsIds: 'KvcsIds',
      maxResults: 'MaxResults',
      name: 'Name',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      status: 'Status',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kvcsIds: 'string',
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      status: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

