// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventDisposeRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return. The value must be greater than or equal to 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The globally unique UUID of the event.
   * 
   * @example
   * 85ea4241-798f-4684-a876-65d4f0c3****
   */
  incidentUuid?: string;
  /**
   * @remarks
   * The number of entries to return on each page. The maximum value is 500.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region where the Data Management center of Threat Analysis is located. Select the region based on the region where your assets are deployed. Valid values:
   * 
   * - cn-hangzhou: Your assets are deployed in the Chinese mainland or China (Hong Kong).
   * 
   * - ap-southeast-1: Your assets are deployed in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of the member. An administrator can use this parameter to switch to the perspective of a member.
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

