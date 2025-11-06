// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PurgeQueueRequest extends $dara.Model {
  collina?: string;
  consoleSessionId?: string;
  instanceId?: string;
  queueName?: string;
  queueNames?: { [key: string]: any };
  umidToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  vhostName?: string;
  static names(): { [key: string]: string } {
    return {
      collina: 'Collina',
      consoleSessionId: 'ConsoleSessionId',
      instanceId: 'InstanceId',
      queueName: 'QueueName',
      queueNames: 'QueueNames',
      umidToken: 'UmidToken',
      vhostName: 'VhostName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collina: 'string',
      consoleSessionId: 'string',
      instanceId: 'string',
      queueName: 'string',
      queueNames: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      umidToken: 'string',
      vhostName: 'string',
    };
  }

  validate() {
    if(this.queueNames) {
      $dara.Model.validateMap(this.queueNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

