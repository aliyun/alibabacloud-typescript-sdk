// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateAppRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the app.
   * 
   * @example
   * 1234
   */
  appId?: number;
  /**
   * @remarks
   * The IDs of the cloud phone instances.
   */
  instanceIdList?: string[];
  /**
   * @remarks
   * The type of the operation.
   * 
   * Valid values:
   * 
   * *   stop: closes the app.
   * *   restart: reopens the app.
   * *   start: open the app.
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

