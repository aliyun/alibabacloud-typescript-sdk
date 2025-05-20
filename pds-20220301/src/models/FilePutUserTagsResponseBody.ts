// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FilePutUserTagsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The file ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 9520943DC264
   */
  fileId?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'file_id',
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

