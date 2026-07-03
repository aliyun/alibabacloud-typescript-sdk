// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudSiemAssetsRequest extends $dara.Model {
  /**
   * @remarks
   * The asset name.
   * 
   * @example
   * test123
   */
  assetName?: string;
  /**
   * @remarks
   * The asset type. Valid values:
   * 
   * - ip: IP address
   * 
   * - domain: domain name
   * 
   * - url: URL
   * 
   * - process: process
   * 
   * - file: file
   * 
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
   * The page number. The value must be greater than or equal to 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The UUID of the event.
   * 
   * @example
   * 85ea4241-798f-4684-a876-65d4f0c3****
   */
  incidentUuid?: string;
  /**
   * @remarks
   * The number of entries to return on each page. The maximum value is 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region where the Data Management center of Threat Analysis is deployed. Select a region based on the region where your assets are located. Valid values:
   * 
   * - cn-hangzhou: assets in the Chinese mainland or China (Hong Kong)
   * 
   * - ap-southeast-1: assets outside China
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of the member whose data you want to view. This parameter is available only when an administrator wants to switch to the perspective of a member.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The view type.
   * 
   * - 0: The view of the current Alibaba Cloud account.
   * 
   * - 1: The view of all accounts that belong to the enterprise.
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

