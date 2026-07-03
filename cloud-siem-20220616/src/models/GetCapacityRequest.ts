// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCapacityRequest extends $dara.Model {
  /**
   * @remarks
   * Region where the Data Management Center for threat analysis is located. Choose a region based on where your assets are located.
   * 
   * - cn-hangzhou: Select this if your assets are in the Chinese mainland or Hong Kong (China).
   * 
   * - ap-southeast-1: Select this if your assets are outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * User ID of the member whose view the administrator switches to.
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
   * - 1: View for all accounts under your enterprise.
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

