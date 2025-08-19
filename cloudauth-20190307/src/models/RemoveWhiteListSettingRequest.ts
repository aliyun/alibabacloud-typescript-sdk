// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveWhiteListSettingRequest extends $dara.Model {
  /**
   * @remarks
   * IDs of the whitelist to be deleted in bulk.
   */
  ids?: number[];
  /**
   * @remarks
   * ServiceCode for the real person cloud product, only value: **antcloudauth**.
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

