// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteFileRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * f-167131acd45omat771813f7141d28db2f7
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

