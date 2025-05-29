// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFileInfoRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * f-16713accddtgtj6340jgnclhwsg1813f718db2f7
   */
  fileId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      fileId: 'FileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
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

