// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRoutineCodeVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The code version.
   * 
   * This parameter is required.
   * 
   * @example
   * 1710120201067203242
   */
  codeVersion?: string;
  /**
   * @remarks
   * The routine name.
   * 
   * This parameter is required.
   * 
   * @example
   * GetRoutineCodeVersion
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

