// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLogTypeRequest extends $dara.Model {
  /**
   * @remarks
   * The region of the Data Management center. Select a region based on where your assets are located. Valid values:
   * 
   * - cn-hangzhou: for assets in the Chinese mainland and China (Hong Kong)
   * 
   * - ap-southeast-1: for assets in regions outside China
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of the member. An administrator can use this parameter to switch to the perspective of a specific member.
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
   * - 1: The view of all accounts in an enterprise.
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

