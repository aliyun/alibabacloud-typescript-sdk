// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDesktopMetadataRequest extends $dara.Model {
  /**
   * @example
   * 2025-01-01T12:00:00Z
   */
  creationTimeStart?: string;
  desktopIds?: string[];
  /**
   * @example
   * dg-i1ruuudp92qpj****
   */
  groupId?: string;
  /**
   * @example
   * ASW-2F-SRV-YXYZ-4.SHPTG
   */
  hostName?: string;
  /**
   * @example
   * m-gx2x1dhsmusr2****
   */
  imageId?: string;
  /**
   * @example
   * false
   */
  includeDesktopGroup?: boolean;
  /**
   * @example
   * ecd
   */
  keyword?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @example
   * cn-hangzhou+dir-778418****
   */
  officeSiteId?: string;
  /**
   * @example
   * 2025-01-01T12:00:00Z
   */
  operationTimeStart?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  searchRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      creationTimeStart: 'CreationTimeStart',
      desktopIds: 'DesktopIds',
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

