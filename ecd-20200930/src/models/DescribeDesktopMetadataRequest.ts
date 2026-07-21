// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDesktopMetadataRequest extends $dara.Model {
  /**
   * @remarks
   * The time when the cloud desktop was created. The time is in UTC format:
   * `yyyy-MM-dd\\"T\\"HH:mm:ss\\"Z\\"`.
   * 
   * @example
   * 2025-01-01T12:00:00Z
   */
  creationTimeStart?: string;
  /**
   * @remarks
   * The list of cloud desktop IDs.
   */
  desktopIds?: string[];
  /**
   * @remarks
   * The end user ID.
   * 
   * @example
   * test-user
   */
  endUserId?: string;
  /**
   * @remarks
   * The shared cloud desktop ID.
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
   * The image ID.
   * 
   * @example
   * m-gx2x1dhsmusr2****
   */
  imageId?: string;
  /**
   * @remarks
   * Specifies whether the response includes cloud desktops in shared cloud desktop groups.
   * 
   * @example
   * false
   */
  includeDesktopGroup?: boolean;
  /**
   * @remarks
   * >This parameter is not yet available.
   * 
   * @example
   * ecd
   */
  keyword?: string;
  /**
   * @remarks
   * The number of entries per page for a paged query. Maximum value: 100. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  networkInterfaceIp?: string;
  /**
   * @remarks
   * The token for the next query. An empty value indicates that there are no more results.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * cn-hangzhou+dir-778418****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The start time of the operation performed on the cloud desktop. The time is in UTC format:
   * `yyyy-MM-dd\\"T\\"HH:mm:ss\\"Z\\"`.
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
      networkInterfaceIp: 'NetworkInterfaceIp',
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
      networkInterfaceIp: 'string',
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

