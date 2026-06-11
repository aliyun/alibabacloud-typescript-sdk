// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDataLevelPermissionWhiteListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the dataset.
   * 
   * This parameter is required.
   * 
   * @example
   * 7c7223ae-***-3c744528014b
   */
  cubeId?: string;
  /**
   * @remarks
   * The operation to perform. Valid values:
   * 
   * - ADD: adds users or user groups to the whitelist.
   * 
   * - DELETE: removes users or user groups from the whitelist.
   * 
   * @example
   * ADD
   */
  operateType?: string;
  /**
   * @remarks
   * The type of permission. Valid values:
   * 
   * - ROW_LEVEL: row-level permission
   * 
   * - COLUMN_LEVEL: column-level permission
   * 
   * @example
   * ROW_LEVEL
   */
  ruleType?: string;
  /**
   * @remarks
   * The IDs of the users or user groups to add to the whitelist.
   * 
   * - If you set TargetType to 1 (user), specify the user IDs.
   * 
   * - When `TargetType=2` (user group), the value is the user group ID.
   * 
   * @example
   * 43342***435,1553a****41231
   */
  targetIds?: string;
  /**
   * @remarks
   * The type of object to add to the whitelist. Valid values:
   * 
   * - 1: user
   * 
   * - 2: user group
   * 
   * @example
   * 1
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      cubeId: 'CubeId',
      operateType: 'OperateType',
      ruleType: 'RuleType',
      targetIds: 'TargetIds',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cubeId: 'string',
      operateType: 'string',
      ruleType: 'string',
      targetIds: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

