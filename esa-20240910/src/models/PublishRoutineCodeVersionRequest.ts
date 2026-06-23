// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublishRoutineCodeVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The version number of the code to publish.
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
   * The name of the Edge Routine.
   * 
   * This parameter is required.
   * 
   * @example
   * test-routine1
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

