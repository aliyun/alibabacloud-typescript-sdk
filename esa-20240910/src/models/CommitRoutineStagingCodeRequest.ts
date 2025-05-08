// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CommitRoutineStagingCodeRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the code version.
   * 
   * @example
   * description of this code ver
   */
  codeDescription?: string;
  /**
   * @remarks
   * The routine name.
   * 
   * This parameter is required.
   * 
   * @example
   * CommitRoutineStagingCode
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

