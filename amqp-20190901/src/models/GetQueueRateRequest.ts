// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQueueRateRequest extends $dara.Model {
  consoleSessionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  queueNames?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   */
  vhostName?: string;
  static names(): { [key: string]: string } {
    return {
      consoleSessionId: 'ConsoleSessionId',
      instanceId: 'InstanceId',
      queueNames: 'QueueNames',
      vhostName: 'VhostName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consoleSessionId: 'string',
      instanceId: 'string',
      queueNames: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
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

