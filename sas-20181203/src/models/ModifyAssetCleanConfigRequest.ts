// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAssetCleanConfigRequestAssetCleanConfigs extends $dara.Model {
  /**
   * @remarks
   * The number of offline days after which non-Alibaba Cloud hosts are automatically cleaned up. Valid values: integers from 1 to 30.
   * 
   * @example
   * 7
   */
  cleanDays?: number;
  /**
   * @remarks
   * Specifies whether to enable automatic cleanup of offline non-Alibaba Cloud hosts. Valid values:
   * 
   * - **0**: Disabled.
   * - **1**: Enabled.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The type of host to clean up. Valid values:
   * 
   * - **1**: non-Alibaba Cloud host.
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
   * The list of asset cleanup configurations.
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

