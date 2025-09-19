// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAssetCleanConfigRequestAssetCleanConfigs extends $dara.Model {
  /**
   * @remarks
   * The number of days before hosts whose provider cannot be identified are automatically cleaned after they enter the offline state. Valid value: an integer that ranges from 1 to 30.
   * 
   * @example
   * 7
   */
  cleanDays?: number;
  /**
   * @remarks
   * Specifies whether to enable the feature of cleaning the offline hosts whose provider cannot be identified. Valid values:
   * 
   * *   **0**: disables the feature.
   * *   **1**: enables the feature.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The type of hosts that you want to clean.
   * 
   * Set the value to **1**, which indicates hosts whose provider cannot be identified.
   * 
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      cleanDays: 'CleanDays',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cleanDays: 'number',
      status: 'number',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAssetCleanConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The asset cleanup configurations.
   */
  assetCleanConfigs?: ModifyAssetCleanConfigRequestAssetCleanConfigs[];
  static names(): { [key: string]: string } {
    return {
      assetCleanConfigs: 'AssetCleanConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetCleanConfigs: { 'type': 'array', 'itemType': ModifyAssetCleanConfigRequestAssetCleanConfigs },
    };
  }

  validate() {
    if(Array.isArray(this.assetCleanConfigs)) {
      $dara.Model.validateArray(this.assetCleanConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

