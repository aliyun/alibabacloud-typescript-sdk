// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDeliveryRequest extends $dara.Model {
  /**
   * @remarks
   * The region of the data management center for threat analysis. Select the region based on where your assets are located. Valid values:
   * 
   * - cn-hangzhou: Select this value if your assets are in the Chinese mainland or China (Hong Kong).
   * 
   * - ap-southeast-1: Select this value if your assets are in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of a member. An administrator can use this parameter to view data from the perspective of the member.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of view. Valid values:
   * 
   * - 0: The view for the current Alibaba Cloud account.
   * 
   * - 1: The view for all accounts in the enterprise.
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

