// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDesktopMetadataRequest extends $dara.Model {
  /**
   * @remarks
   * The creation time of the cloud computer. The time must be in the `yyyy-MM-dd\\"T\\"HH:mm:ss\\"Z\\"` format and in UTC.
   * 
   * @example
   * 2025-01-01T12:00:00Z
   */
  creationTimeStart?: string;
  /**
   * @remarks
   * A list of cloud computer IDs.
   */
  desktopIds?: string[];
  /**
   * @remarks
   * The ID of the end user.
   * 
   * @example
   * test-user
   */
  endUserId?: string;
  /**
   * @remarks
   * The ID of the cloud computer share.
   * 
   * @example
   * dg-i1ruuudp92qpj****
   */
  groupId?: string;
  /**
   * @remarks
   * The hostname.
   * 
   * @example
   * ASW-2F-SRV-YXYZ-4.SHPTG
   */
  hostName?: string;
  /**
   * @remarks
   * The ID of the image.
   * 
   * @example
   * m-gx2x1dhsmusr2****
   */
  imageId?: string;
  /**
   * @remarks
   * Specifies whether to include cloud computers in cloud computer shares in the response.
   * 
   * @example
   * false
   */
  includeDesktopGroup?: boolean;
  /**
   * @remarks
   * > This parameter is not yet available.
   * 
   * @example
   * ecd
   */
  keyword?: string;
  /**
   * @remarks
   * The maximum number of entries to return per page. Maximum: 100. Default: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token returned from the previous call to retrieve the next page of results.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the office network.
   * 
   * @example
   * cn-hangzhou+dir-778418****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The start of the time range to query for operations. The time must be in the `yyyy-MM-dd\\"T\\"HH:mm:ss\\"Z\\"` format and in UTC.
   * 
   * @example
   * 2025-01-01T12:00:00Z
   */
  operationTimeStart?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the region to search.
   * 
   * @example
   * cn-hangzhou
   */
  searchRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      creationTimeStart: 'CreationTimeStart',
      desktopIds: 'DesktopIds',
      endUserId: 'EndUserId',
      groupId: 'GroupId',
      hostName: 'HostName',
      imageId: 'ImageId',
      includeDesktopGroup: 'IncludeDesktopGroup',
      keyword: 'Keyword',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      officeSiteId: 'OfficeSiteId',
      operationTimeStart: 'OperationTimeStart',
      regionId: 'RegionId',
      searchRegionId: 'SearchRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTimeStart: 'string',
      desktopIds: { 'type': 'array', 'itemType': 'string' },
      endUserId: 'string',
      groupId: 'string',
      hostName: 'string',
      imageId: 'string',
      includeDesktopGroup: 'boolean',
      keyword: 'string',
      maxResults: 'number',
      nextToken: 'string',
      officeSiteId: 'string',
      operationTimeStart: 'string',
      regionId: 'string',
      searchRegionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.desktopIds)) {
      $dara.Model.validateArray(this.desktopIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

