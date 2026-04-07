// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResumeSessionRequest extends $dara.Model {
  fileSystemOnly?: boolean;
  /**
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

