// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestartWuyingServerRequest extends $dara.Model {
  /**
   * @remarks
   * The list of workstation IDs.
   */
  wuyingServerIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      wuyingServerIdList: 'WuyingServerIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      wuyingServerIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.wuyingServerIdList)) {
      $dara.Model.validateArray(this.wuyingServerIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

