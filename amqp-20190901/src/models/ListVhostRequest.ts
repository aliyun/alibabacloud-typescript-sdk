// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVhostRequest extends $dara.Model {
  consoleSessionId?: string;
  instanceId?: string;
  vhostNamePrefix?: string;
  static names(): { [key: string]: string } {
    return {
      consoleSessionId: 'ConsoleSessionId',
      instanceId: 'InstanceId',
      vhostNamePrefix: 'VhostNamePrefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consoleSessionId: 'string',
      instanceId: 'string',
      vhostNamePrefix: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

