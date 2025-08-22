// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadRoutineCodeRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the code version.
   * 
   * This parameter is required.
   * 
   * @example
   * Hello World
   */
  codeDescription?: string;
  /**
   * @remarks
   * The name of the routine. The name must be unique among the routines that belong to the same Alibaba Cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      codeDescription: 'CodeDescription',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeDescription: 'string',
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

