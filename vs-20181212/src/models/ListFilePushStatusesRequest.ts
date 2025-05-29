// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFilePushStatusesRequest extends $dara.Model {
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
  /**
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      fileName: 'FileName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      renderingInstanceId: 'RenderingInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      fileName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      renderingInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

