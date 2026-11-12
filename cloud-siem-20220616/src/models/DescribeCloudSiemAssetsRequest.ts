// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudSiemAssetsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the asset.
   * 
   * @example
   * test123
   */
  assetName?: string;
  /**
   * @remarks
   * The asset type. Valid values:
   * - ip: IP address
   * - domain: domain name
   * - url: URL
   * - process: process
   * - file: file
   * - host: host
   * 
   * @example
   * ip
   */
  assetType?: string;
  /**
   * @remarks
   * The UUID of the asset.
   * 
   * @example
   * 123456-2222-3333-5555-3435345****
   */
  assetUuid?: string;
  /**
   * @remarks
   * The number of the current page. The value must be greater than or equal to 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The UUID of the incident.
   * 
   * @example
   * 85ea4241-798f-4684-a876-65d4f0c3****
   */
  incidentUuid?: string;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region where the data management center of Threat Analysis is located. You must select the region of the management center based on the region where the assets reside. Valid values:
   * - cn-hangzhou: Assets are located in the Chinese mainland and Hong Kong (China).
   * - ap-southeast-1: Assets are located in regions outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the user whose perspective the administrator switches to.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * - 0: the view of the current Alibaba Cloud account
   * - 1: the view of all accounts in the enterprise
   * 
   * @example
   * 1
   */
  roleType?: number;
  static names(): { [key: string]: string } {
    return {
      assetName: 'AssetName',
      assetType: 'AssetType',
      assetUuid: 'AssetUuid',
      currentPage: 'CurrentPage',
      incidentUuid: 'IncidentUuid',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetName: 'string',
      assetType: 'string',
      assetUuid: 'string',
      currentPage: 'number',
      incidentUuid: 'string',
      pageSize: 'number',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

