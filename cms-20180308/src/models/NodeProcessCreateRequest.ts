// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NodeProcessCreateRequest extends $dara.Model {
  command?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  name?: string;
  processName?: string;
  processUser?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
      instanceId: 'InstanceId',
      name: 'Name',
      processName: 'ProcessName',
      processUser: 'ProcessUser',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: 'string',
      instanceId: 'string',
      name: 'string',
      processName: 'string',
      processUser: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

