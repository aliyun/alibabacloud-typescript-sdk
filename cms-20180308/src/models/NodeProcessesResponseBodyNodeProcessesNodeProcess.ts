// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NodeProcessesResponseBodyNodeProcessesNodeProcess extends $dara.Model {
  command?: string;
  id?: number;
  instanceId?: string;
  name?: string;
  processName?: string;
  processUser?: string;
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
      id: 'Id',
      instanceId: 'InstanceId',
      name: 'Name',
      processName: 'ProcessName',
      processUser: 'ProcessUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: 'string',
      id: 'number',
      instanceId: 'string',
      name: 'string',
      processName: 'string',
      processUser: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

