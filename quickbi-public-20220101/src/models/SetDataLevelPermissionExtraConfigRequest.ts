// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDataLevelPermissionExtraConfigRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 7c7223ae-******-3c744528014b
   */
  cubeId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * NONE
   */
  missHitPolicy?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ROW_LEVEL
   */
  ruleType?: string;
  static names(): { [key: string]: string } {
    return {
      cubeId: 'CubeId',
      missHitPolicy: 'MissHitPolicy',
      ruleType: 'RuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cubeId: 'string',
      missHitPolicy: 'string',
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

