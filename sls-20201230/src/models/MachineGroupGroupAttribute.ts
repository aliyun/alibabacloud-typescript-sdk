// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MachineGroupGroupAttribute extends $dara.Model {
  /**
   * @example
   * test-group
   */
  externalName?: string;
  /**
   * @example
   * test-topic
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

