// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataServiceFolderResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the created folder.
   * 
   * @example
   * 123
   */
  folderId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0000-ABCD-E****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      folderId: 'FolderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderId: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

