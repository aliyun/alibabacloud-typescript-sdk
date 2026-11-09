// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchQuerySessionByClientIdsRequest extends $dara.Model {
  /**
   * @remarks
   * The list of clients.
   * 
   * This parameter is required.
   * 
   * @example
   * ClientIdList.1
   */
  clientIdList?: string[];
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance. The ID must match the actual instance ID used by the client. You can obtain the ID on the **Instance Details** page in the [console](https://mqtt.console.aliyun.com).
   * 
   * This parameter is required.
   * 
   * @example
   * post-cn-0pp12gl****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientIdList: 'ClientIdList',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIdList: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.clientIdList)) {
      $dara.Model.validateArray(this.clientIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

