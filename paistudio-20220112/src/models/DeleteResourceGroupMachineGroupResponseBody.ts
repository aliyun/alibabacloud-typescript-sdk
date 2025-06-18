// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteResourceGroupMachineGroupResponseBody extends $dara.Model {
  machineGroupID?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      machineGroupID: 'MachineGroupID',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      machineGroupID: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

