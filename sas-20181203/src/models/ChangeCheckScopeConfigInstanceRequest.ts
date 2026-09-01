// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeCheckScopeConfigInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The list of unique IDs of cloud assets to add.
   */
  addAssetUuids?: string[];
  /**
   * @remarks
   * The ID of the scan scope configuration.
   * >Call the [GetCheckScopeConfig](~~GetCheckScopeConfig~~) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 00cfa8161da093089e6804ba6a33****
   */
  configId?: string;
  /**
   * @remarks
   * The list of unique IDs of cloud assets to delete.
   */
  deleteAssetUuids?: string[];
  static names(): { [key: string]: string } {
    return {
      addAssetUuids: 'AddAssetUuids',
      configId: 'ConfigId',
      deleteAssetUuids: 'DeleteAssetUuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addAssetUuids: { 'type': 'array', 'itemType': 'string' },
      configId: 'string',
      deleteAssetUuids: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.addAssetUuids)) {
      $dara.Model.validateArray(this.addAssetUuids);
    }
    if(Array.isArray(this.deleteAssetUuids)) {
      $dara.Model.validateArray(this.deleteAssetUuids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

