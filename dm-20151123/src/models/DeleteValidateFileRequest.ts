// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteValidateFileRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the file that is returned after the task is submitted.
   * 
   * @example
   * xxxx-xxxx-xxxx-xxxx
   */
  fileId?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

