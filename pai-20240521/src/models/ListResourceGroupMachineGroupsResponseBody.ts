// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MachineGroup } from "./MachineGroup";


export class ListResourceGroupMachineGroupsResponseBody extends $dara.Model {
  machineGroups?: MachineGroup[];
  requestId?: string;
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      machineGroups: 'MachineGroups',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      machineGroups: { 'type': 'array', 'itemType': MachineGroup },
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.machineGroups)) {
      $dara.Model.validateArray(this.machineGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

