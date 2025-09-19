// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAttackPathSensitiveAssetConfigRequest extends $dara.Model {
  /**
   * @remarks
   * ID of the created attack path sensitive asset setting.
   * 
   * @example
   * apsac-123
   */
  attackPathSensitiveAssetConfigId?: string;
  /**
   * @remarks
   * Configuration type. Possible values:
   * - asset_instance: Asset.
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

