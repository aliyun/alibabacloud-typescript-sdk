// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateAppRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * 1234
   */
  appId?: number;
  /**
   * @remarks
   * The list of instances.
   */
  instanceIdList?: string[];
  /**
   * @remarks
   * The operation type. Supported operations include starting, stopping, and restarting.
   * 
   * @example
   * start
   */
  operateType?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      instanceIdList: 'InstanceIdList',
      operateType: 'OperateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      instanceIdList: { 'type': 'array', 'itemType': 'string' },
      operateType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIdList)) {
      $dara.Model.validateArray(this.instanceIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

