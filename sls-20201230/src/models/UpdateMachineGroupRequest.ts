// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMachineGroupRequestGroupAttribute extends $dara.Model {
  /**
   * @remarks
   * The identifier of the external management system on which the machine group depends. This parameter is empty by default.
   * 
   * @example
   * testgroup2
   */
  externalName?: string;
  /**
   * @remarks
   * The topic of the machine group. This parameter is empty by default.
   * 
   * @example
   * testtopic2
   */
  groupTopic?: string;
  static names(): { [key: string]: string } {
    return {
      externalName: 'externalName',
      groupTopic: 'groupTopic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalName: 'string',
      groupTopic: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMachineGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The attribute of the machine group. This parameter is empty by default.
   */
  groupAttribute?: UpdateMachineGroupRequestGroupAttribute;
  /**
   * @remarks
   * The name of the machine group.
   * 
   * This parameter is required.
   * 
   * @example
   * test-machine-group
   */
  groupName?: string;
  /**
   * @remarks
   * The type of the machine group. Set the value to an empty string.
   * 
   * @example
   * ""
   */
  groupType?: string;
  /**
   * @remarks
   * The identifier type of the machine group. Valid values:
   * 
   * *   ip: The machine group uses IP addresses as identifiers.
   * *   userdefined: The machine group uses custom identifiers.
   * 
   * This parameter is required.
   * 
   * @example
   * userdefined
   */
  machineIdentifyType?: string;
  /**
   * @remarks
   * The identifiers of the machines in the machine group.
   * 
   * *   If you set machineIdentifyType to ip, enter the IP addresses of the machines.
   * *   If you set machineIdentifyType to userdefined, enter a custom identifier.
   * 
   * This parameter is required.
   * 
   * @example
   * [uu_id_1，uu_id_2]
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
      groupAttribute: UpdateMachineGroupRequestGroupAttribute,
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

