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

