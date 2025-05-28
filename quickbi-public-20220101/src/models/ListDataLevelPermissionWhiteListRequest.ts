// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataLevelPermissionWhiteListRequest extends $dara.Model {
  /**
   * @remarks
   * Dataset ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 3d5db23c-e4f2-49dd-a883-92285b48e14a
   */
  cubeId?: string;
  /**
   * @remarks
   * Type of row and column permission that the whitelist belongs to:
   * 
   * - ROW_LEVEL: Row-level permission
   * - COLUMN_LEVEL: Column-level permission
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

