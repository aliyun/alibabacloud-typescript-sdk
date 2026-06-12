// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MachineGroupGroupAttribute extends $dara.Model {
  /**
   * @remarks
   * The identifier of the external management system that the machine group depends on.
   * 
   * @example
   * testgroup
   */
  externalName?: string;
  /**
   * @remarks
   * The topic of the machine group.
   * 
   * @example
   * testtopic
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

export class MachineGroup extends $dara.Model {
  /**
   * @remarks
   * The properties of the machine group.
   */
  groupAttribute?: MachineGroupGroupAttribute;
  /**
   * @remarks
   * The name of the machine group.
   * 
   * This parameter is required.
   * 
   * @example
   * machineGroup-test
   */
  groupName?: string;
  /**
   * @remarks
   * The type of the machine group. This parameter is currently an empty string.
   * 
   * @example
   * “”
   */
  groupType?: string;
  /**
   * @remarks
   * The machine identity type.
   * 
   * - ip: The machine group is identified by IP addresses.
   * 
   * - userdefined: The machine group is identified by custom identifiers.
   * 
   * This parameter is required.
   * 
   * @example
   * ip
   */
  machineIdentifyType?: string;
  /**
   * @remarks
   * The list of machines.
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
      groupAttribute: MachineGroupGroupAttribute,
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

