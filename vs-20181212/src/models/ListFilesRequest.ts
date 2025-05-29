// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFilesRequest extends $dara.Model {
  /**
   * @example
   * f-1671accd4dafdag3er256cvgewt13f7141db2f7
   */
  fileId?: string;
  /**
   * @example
   * myfile
   */
  fileName?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      fileName: 'FileName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      fileName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

