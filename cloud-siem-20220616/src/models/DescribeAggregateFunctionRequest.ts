// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAggregateFunctionRequest extends $dara.Model {
  /**
   * @remarks
   * The region where the data management center of Threat Analysis is located. Select a region based on the location of your assets. Valid values:
   * 
   * - cn-hangzhou: Your assets are in the Chinese mainland or Hong Kong (China).
   * 
   * - ap-southeast-1: Your assets are in a region outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the member. An administrator can switch to the perspective of the member.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * 
   * - 0: The view of the current Alibaba Cloud account.
   * 
   * - 1: The view of all accounts in the enterprise.
   * 
   * @example
   * 1
   */
  roleType?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

