// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateMachineGroupRequestGroupAttribute } from "./CreateMachineGroupRequestGroupAttribute";


export class CreateMachineGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The attributes of the machine group.
   */
  groupAttribute?: CreateMachineGroupRequestGroupAttribute;
  /**
   * @remarks
   * The name of the machine group. The name must meet the following requirements:
   * 
   * *   The name of each machine group in a project must be unique.
   * *   It can contain only lowercase letters, digits, hyphens (-), and underscores (_).
   * *   It must start and end with a lowercase letter or a digit.
   * *   It must be 3 to 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * test-machine-group
   */
  groupName?: string;
  /**
   * @remarks
   * The type of the machine group. The parameter can be left empty.
   * 
   * @example
   * ""
   */
  groupType?: string;
  /**
   * @remarks
   * The type of the machine group identifier. Valid values:
   * 
   * *   ip: The machine group uses IP addresses as identifiers.
   * *   userdefined: The machine group uses custom identifiers.
   * 
   * This parameter is required.
   * 
   * @example
   * ip
   */
  machineIdentifyType?: string;
  /**
   * @remarks
   * The identifiers of machine group.
   * 
   * *   If you set machineIdentifyType to ip, enter the IP address of the machine.
   * *   If you set machineIdentifyType to userdefined, enter a custom identifier.
   * 
   * This parameter is required.
   */
  machineList?: string[];
  static names(): { [key: string]: string } {
    return {
      groupAttribute: 'groupAttribute',
      groupName: 'groupName',
      groupType: 'groupType',
      machineIdentifyType: 'machineIdentifyType',
      machineList: 'machineList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupAttribute: CreateMachineGroupRequestGroupAttribute,
      groupName: 'string',
      groupType: 'string',
      machineIdentifyType: 'string',
      machineList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.groupAttribute && typeof (this.groupAttribute as any).validate === 'function') {
      (this.groupAttribute as any).validate();
    }
    if(Array.isArray(this.machineList)) {
      $dara.Model.validateArray(this.machineList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

