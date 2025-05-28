// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDataLevelPermissionWhiteListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the training dataset that you want to remove from the specified custom linguistic model.
   * 
   * This parameter is required.
   * 
   * @example
   * 7c7223ae-***-3c744528014b
   */
  cubeId?: string;
  /**
   * @remarks
   * Operation Type: You can set this parameter to one of the following values.
   * 
   * *   ADD: Add a whitelist
   * *   DELETE: deletes a whitelist.
   * 
   * @example
   * ADD
   */
  operateType?: string;
  /**
   * @remarks
   * The type of row-level permissions.
   * 
   * *   ROW_LEVEL: row-level permissions,
   * *   COLUMN_LEVEL: column-level permissions
   * 
   * @example
   * ROW_LEVEL
   */
  ruleType?: string;
  /**
   * @example
   * 43342***435,1553a****41231
   */
  targetIds?: string;
  /**
   * @remarks
   * Modify the type of the whitelist:
   * 
   * *   1: user
   * *   2: user group
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

