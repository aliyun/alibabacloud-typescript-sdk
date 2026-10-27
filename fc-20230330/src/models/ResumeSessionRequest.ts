// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResumeSessionRequest extends $dara.Model {
  fileSystemOnly?: boolean;
  /**
   * @remarks
   * The alias or version of the function associated with the session ID to be resumed.
   * 
   * @example
   * aliasName1
   */
  qualifier?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemOnly: 'fileSystemOnly',
      qualifier: 'qualifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemOnly: 'boolean',
      qualifier: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

