// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteVhostShrinkRequest extends $dara.Model {
  consoleSessionId?: string;
  instanceId?: string;
  vhostName?: string;
  vhostNamesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      consoleSessionId: 'ConsoleSessionId',
      instanceId: 'InstanceId',
      vhostName: 'VhostName',
      vhostNamesShrink: 'VhostNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consoleSessionId: 'string',
      instanceId: 'string',
      vhostName: 'string',
      vhostNamesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

