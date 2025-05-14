// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAppsRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the applications.
   */
  appIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      appIdList: 'AppIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.appIdList)) {
      $dara.Model.validateArray(this.appIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

