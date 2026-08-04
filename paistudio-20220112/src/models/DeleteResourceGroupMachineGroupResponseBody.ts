// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteResourceGroupMachineGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the deleted machine group.
   */
  machineGroupID?: string;
  /**
   * @remarks
   * The request ID. Provide this ID to our technical support for troubleshooting.
   */
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

