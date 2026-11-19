// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDataLevelPermissionWhiteListRequest extends $dara.Model {
  /**
   * @remarks
   * The dataset ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 7c7223ae-***-3c744528014b
   */
  cubeId?: string;
  /**
   * @remarks
   * The operation type. Valid values: 
   * 
   * - ADD: add entries to the whitelist
   * - DELETE: remove entries from the whitelist
   * 
   * @example
   * ADD
   */
  operateType?: string;
  /**
   * @remarks
   * The permission type. Valid values:
   * 
   * - ROW_LEVEL: row-level permissions
   * - COLUMN_LEVEL: column-level permissions
   * 
   * @example
   * ROW_LEVEL
   */
  ruleType?: string;
  /**
   * @remarks
   * The authorization targets. You can specify multiple targets separated by commas (,). Valid values:
   * 
   * - If TargetType is set to 1 (user), the value is the user ID.
   * - If TargetType is set to 2 (user group), the value is the user group ID.
   * 
   * @example
   * 43342***435,1553a****41231
   */
  targetIds?: string;
  /**
   * @remarks
   * The type of the target for which the whitelist is modified. Valid values:
   * 
   * - 1: user 
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

