// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAutomateResponseConfigStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the automatic response rules. The value is a JSON array.
   * 
   * @example
   * [123,345]
   */
  ids?: string;
  /**
   * @remarks
   * Specifies whether the rule is enabled. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  inUse?: boolean;
  /**
   * @remarks
   * The data management center of the threat analysis feature. Specify this parameter based on the region in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions inside China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the account that you switch from the management account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * - 0: the current Alibaba Cloud account
   * - 1: the global account
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

