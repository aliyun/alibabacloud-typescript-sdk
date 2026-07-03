// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventCountByThreatLevelRequest extends $dara.Model {
  /**
   * @remarks
   * End time of the query, in milliseconds.
   * 
   * @example
   * 1577808000000
   */
  endTime?: number;
  /**
   * @remarks
   * Region where the Data Management Center for threat analysis is located. Select a region based on the location of your assets. Valid values:
   * 
   * - cn-hangzhou: Assets are in the Chinese mainland or Hong Kong (China).
   * 
   * - ap-southeast-1: Assets are outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Resource directory member account ID.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * View type.
   * 
   * - 0: View for the current Alibaba Cloud account.
   * 
   * - 1: View for all accounts in your enterprise.
   * 
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * Start time of the query, in milliseconds.
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

