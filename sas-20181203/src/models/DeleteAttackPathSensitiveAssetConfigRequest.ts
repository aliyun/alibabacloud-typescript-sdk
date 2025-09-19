// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAttackPathSensitiveAssetConfigRequest extends $dara.Model {
  /**
   * @remarks
   * ID of the attack path sensitive asset configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * apsac-123
   */
  attackPathSensitiveAssetConfigId?: string;
  static names(): { [key: string]: string } {
    return {
      attackPathSensitiveAssetConfigId: 'AttackPathSensitiveAssetConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackPathSensitiveAssetConfigId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

