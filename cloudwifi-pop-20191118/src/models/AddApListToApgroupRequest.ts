// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddApListToApgroupRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  apGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  apMacList?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   */
  appCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  appName?: string;
  static names(): { [key: string]: string } {
    return {
      apGroupId: 'ApGroupId',
      apMacList: 'ApMacList',
      appCode: 'AppCode',
      appName: 'AppName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apGroupId: 'string',
      apMacList: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      appCode: 'string',
      appName: 'string',
    };
  }

  validate() {
    if(this.apMacList) {
      $dara.Model.validateMap(this.apMacList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

