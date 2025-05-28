// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataLevelPermissionStatusRequest extends $dara.Model {
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
   * This parameter is required.
   * 
   * @example
   * 1
   */
  isOpen?: number;
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
      isOpen: 'IsOpen',
      ruleType: 'RuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cubeId: 'string',
      isOpen: 'number',
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

