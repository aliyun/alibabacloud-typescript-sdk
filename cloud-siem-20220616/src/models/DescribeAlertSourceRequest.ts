// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAlertSourceRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the query time range. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1577808000000
   */
  endTime?: number;
  /**
   * @remarks
   * The threat levels. Valid values:
   * 
   * - `serious`: High
   * 
   * - `suspicious`: Medium
   * 
   * - `remind`: Low
   * 
   * @example
   * ["serious","suspicious","remind"]
   */
  level?: string[];
  /**
   * @remarks
   * The region of the data management center for threat analysis. Select the data management center that corresponds to the region where your assets are located. Valid values:
   * 
   * - `cn-hangzhou`: for assets in the Chinese mainland and Hong Kong (China).
   * 
   * - `ap-southeast-1`: for assets in regions outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of the member whose data you want to view. An administrator uses this parameter to view data from the perspective of a specific member.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of view. Valid values:
   * 
   * - `0`: View data for the current Alibaba Cloud account.
   * 
   * - `1`: View data for all accounts in the enterprise.
   * 
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * The start of the query time range. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1577808000000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      level: 'Level',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      level: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
      startTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.level)) {
      $dara.Model.validateArray(this.level);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

