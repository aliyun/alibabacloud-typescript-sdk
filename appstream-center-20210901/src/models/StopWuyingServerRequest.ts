// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopWuyingServerRequest extends $dara.Model {
  /**
   * @remarks
   * Force restart.
   * 
   * Valid values:
   * 
   * *   True.
   * *   False
   * 
   * @example
   * True
   */
  force?: boolean;
  /**
   * @remarks
   * The list of workstation IDs.
   */
  wuyingServerIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      force: 'Force',
      wuyingServerIdList: 'WuyingServerIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      force: 'boolean',
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

