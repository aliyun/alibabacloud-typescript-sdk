// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWhiteRuleListRequest extends $dara.Model {
  /**
   * @remarks
   * The alert name.
   * 
   * @example
   * Try SNMP weak password
   */
  alertName?: string;
  /**
   * @remarks
   * The alert type.
   * 
   * @example
   * scan
   */
  alertType?: string;
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
   * The universally unique identifier (UUID) of the event.
   * 
   * @example
   * 85ea4241-798f-4684-a876-65d4f0c3****
   */
  incidentUuid?: string;
  /**
   * @remarks
   * The number of entries per page. The maximum value is 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region where the data management center of Threat Analysis is deployed. You must select the region where your assets are located. Valid values:
   * 
   * - cn-hangzhou: Your assets are deployed in the Chinese mainland or in the China (Hong Kong) region.
   * 
   * - ap-southeast-1: Your assets are deployed in regions outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the member. This parameter is used in a multi-account management scenario. An administrator can specify this parameter to query the data of a member.
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
   * - 1: the view of all accounts that are managed by the administrator account.
   * 
   * @example
   * 1
   */
  roleType?: number;
  static names(): { [key: string]: string } {
    return {
      alertName: 'AlertName',
      alertType: 'AlertType',
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
      alertName: 'string',
      alertType: 'string',
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

