// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBlackholeStatusRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  blackholeStatus?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      blackholeStatus: 'BlackholeStatus',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackholeStatus: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

