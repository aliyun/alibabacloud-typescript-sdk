// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAutomateResponseConfigStatusRequest extends $dara.Model {
  /**
   * @remarks
   * A JSON array of automated response rule IDs.
   * 
   * @example
   * [123,345]
   */
  ids?: string;
  /**
   * @remarks
   * The enabling status of the rule. Valid values:
   * 
   * - true: enabled
   * 
   * - false: disabled
   * 
   * @example
   * true
   */
  inUse?: boolean;
  /**
   * @remarks
   * The region where the Data Management center for threat analysis is deployed. You must select a region based on the region where your assets are located. Valid values:
   * 
   * - cn-hangzhou: Your assets are in the Chinese mainland or China (Hong Kong).
   * 
   * - ap-southeast-1: Your assets are in a region outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the member account that the administrator wants to access.
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
      ids: 'Ids',
      inUse: 'InUse',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: 'string',
      inUse: 'boolean',
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

