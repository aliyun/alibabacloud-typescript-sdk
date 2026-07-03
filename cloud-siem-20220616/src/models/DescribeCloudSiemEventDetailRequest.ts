// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudSiemEventDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The UUID of the event.
   * 
   * This parameter is required.
   * 
   * @example
   * 85ea4241-798f-4684-a876-65d4f0c3****
   */
  incidentUuid?: string;
  /**
   * @remarks
   * The region of the data management center for Threat Analysis. Select the region where your assets are located. Valid values:
   * 
   * - cn-hangzhou: assets in the Chinese mainland and China (Hong Kong)
   * 
   * - ap-southeast-1: assets in regions outside the Chinese mainland
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the member account. An administrator can use this parameter to query data from the perspective of the member.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The view type.
   * 
   * - 0: the view of the current Alibaba Cloud account.
   * 
   * - 1: the view of all accounts in your enterprise.
   * 
   * @example
   * 1
   */
  roleType?: number;
  static names(): { [key: string]: string } {
    return {
      incidentUuid: 'IncidentUuid',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      incidentUuid: 'string',
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

