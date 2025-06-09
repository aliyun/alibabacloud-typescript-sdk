// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMachineGroupMachineRequest extends $dara.Model {
  /**
   * @remarks
   * The operation on the machine. Valid values: add and delete. A value of add specifies to add the machine to the machine group. A value of delete specifies to remove the machine from the machine group.
   * 
   * @example
   * add
   */
  action?: string;
  /**
   * @remarks
   * The machines to be added or removed.
   * 
   * This parameter is required.
   */
  body?: string[];
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      body: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.body)) {
      $dara.Model.validateArray(this.body);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

