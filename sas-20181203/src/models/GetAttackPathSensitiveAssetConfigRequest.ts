// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAttackPathSensitiveAssetConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the attack path sensitive asset configuration.
   * 
   * @example
   * apsac-123
   */
  attackPathSensitiveAssetConfigId?: string;
  /**
   * @remarks
   * The configuration type. Valid values:
   * - asset_instance: asset.
   * 
   * This parameter is required.
   * 
   * @example
   * asset_instance
   */
  configType?: string;
  static names(): { [key: string]: string } {
    return {
      attackPathSensitiveAssetConfigId: 'AttackPathSensitiveAssetConfigId',
      configType: 'ConfigType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackPathSensitiveAssetConfigId: 'string',
      configType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

