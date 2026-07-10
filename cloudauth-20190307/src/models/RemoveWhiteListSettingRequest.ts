// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveWhiteListSettingRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the whitelists to delete in batch.
   */
  ids?: number[];
  /**
   * @remarks
   * The ServiceCode of the ID Verification service. Set this parameter to **antcloudauth**.
   * 
   * @example
   * antcloudauth
   */
  serviceCode?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      serviceCode: 'ServiceCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: { 'type': 'array', 'itemType': 'number' },
      serviceCode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ids)) {
      $dara.Model.validateArray(this.ids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

