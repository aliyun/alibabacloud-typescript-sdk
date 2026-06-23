// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRoutineCodeVersionInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The code version number to query.
   * 
   * This parameter is required.
   * 
   * @example
   * 1710120201067203242
   */
  codeVersion?: string;
  /**
   * @remarks
   * The name of the Edge Routine.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      codeVersion: 'CodeVersion',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeVersion: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

