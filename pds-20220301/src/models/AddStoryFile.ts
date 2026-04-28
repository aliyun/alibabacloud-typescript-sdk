// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddStoryFile extends $dara.Model {
  /**
   * @remarks
   * Error codes when adding a single file.
   */
  errorCode?: string;
  /**
   * @remarks
   * Error message when adding a single file.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The file ID.
   * 
   * @example
   * 63e5e4340f76cb3ead5f40f68163f0f967c1a7bf
   */
  fileId?: string;
  /**
   * @remarks
   * File version.
   * 
   * @example
   * 642a88dd06e49d9c0a14411ebae606f70edd9a59
   */
  revisionId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'error_code',
      errorMessage: 'error_message',
      fileId: 'file_id',
      revisionId: 'revision_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      fileId: 'string',
      revisionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

