// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMachineGroupRequestGroupAttribute extends $dara.Model {
  /**
   * @remarks
   * The identifier of the external management system on which the machine group depends.
   * 
   * @example
   * testgroup
   */
  externalName?: string;
  /**
   * @remarks
   * The log topic of the machine group.
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

