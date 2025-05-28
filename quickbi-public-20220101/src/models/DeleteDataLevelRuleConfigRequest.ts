// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDataLevelRuleConfigRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 7c7223ae-****-3c744528014b
   */
  cubeId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a5bb24da-****-a891683e14da
   */
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      cubeId: 'CubeId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cubeId: 'string',
      ruleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

