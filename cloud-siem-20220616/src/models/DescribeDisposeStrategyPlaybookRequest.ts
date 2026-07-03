// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDisposeStrategyPlaybookRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the query. This value is a UNIX timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1577808000000
   */
  endTime?: number;
  /**
   * @remarks
   * The region of the Data Management center for Threat Analysis. Select a region based on the location of your assets. Valid values:
   * 
   * - cn-hangzhou: The assets are in the Chinese mainland or China (Hong Kong).
   * 
   * - ap-southeast-1: The assets are outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of the member. An administrator can use this parameter to switch to the member\\"s view.
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
   * The start time of the query. This value is a UNIX timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1577808000000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
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

