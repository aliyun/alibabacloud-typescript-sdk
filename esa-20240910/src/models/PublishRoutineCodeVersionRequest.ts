// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublishRoutineCodeVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The code version to be released.
   * 
   * @example
   * 1710120201067203242
   */
  codeVersion?: string;
  /**
   * @remarks
   * The environment name.
   * 
   * This parameter is required.
   * 
   * @example
   * production
   */
  env?: string;
  /**
   * @remarks
   * The routine name.
   * 
   * This parameter is required.
   * 
   * @example
   * PublishRoutineCodeVersion
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      codeVersion: 'CodeVersion',
      env: 'Env',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeVersion: 'string',
      env: 'string',
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

