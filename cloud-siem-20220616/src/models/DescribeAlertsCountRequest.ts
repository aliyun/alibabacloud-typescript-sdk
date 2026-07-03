// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAlertsCountRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the query. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1577808000000
   */
  endTime?: number;
  /**
   * @remarks
   * The query type.
   * 
   * @example
   * bySrcProd
   */
  queryType?: string;
  /**
   * @remarks
   * The region of the data management center. Select the region where your assets are located. Valid values:
   * 
   * - cn-hangzhou: Your assets are in the Chinese mainland or China (Hong Kong).
   * 
   * - ap-southeast-1: Your assets are outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of a member. An administrator can specify this parameter to query alerts from the perspective of the member.
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
   * - 1: The view of all accounts in the enterprise.
   * 
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * The start time of the query. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1577808000000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      queryType: 'QueryType',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      queryType: 'string',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

