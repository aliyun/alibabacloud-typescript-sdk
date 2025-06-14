// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MachineGroupGroupAttribute } from "./MachineGroupGroupAttribute";


export class MachineGroup extends $dara.Model {
  groupAttribute?: MachineGroupGroupAttribute;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-group
   */
  groupName?: string;
  groupType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ip
   */
  machineIdentifyType?: string;
  /**
   * @remarks
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

