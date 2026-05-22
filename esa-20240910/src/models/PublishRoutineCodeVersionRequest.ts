// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublishRoutineCodeVersionRequest extends $dara.Model {
  codeVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  env?: string;
  /**
   * @remarks
   * This parameter is required.
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

