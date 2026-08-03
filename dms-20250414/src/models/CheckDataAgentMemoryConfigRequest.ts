// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckDataAgentMemoryConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The current Data Management unit.
   * 
   * @example
   * cn-hangzhou
   */
  DMSUnit?: string;
  static names(): { [key: string]: string } {
    return {
      DMSUnit: 'DMSUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DMSUnit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

