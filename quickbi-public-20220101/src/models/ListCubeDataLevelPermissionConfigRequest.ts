// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCubeDataLevelPermissionConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the training dataset that you want to remove from the specified custom linguistic model.
   * 
   * This parameter is required.
   * 
   * @example
   * 7c7223ae-****-3c744528014b
   */
  cubeId?: string;
  /**
   * @remarks
   * The type of the dataset row and column permission. Valid values:
   * 
   * *   ROW_LEVEL: row-level permissions
   * *   COLUMN_LEVEL: column-level permissions
   * 
   * This parameter is required.
   * 
   * @example
   * ROW_LEVEL
   */
  ruleType?: string;
  static names(): { [key: string]: string } {
    return {
      cubeId: 'CubeId',
      ruleType: 'RuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cubeId: 'string',
      ruleType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

