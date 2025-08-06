// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefreshMediaPlayUrlsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs of the media files that cannot be operated on. In most cases, media files cannot be operated on because you are not authorized to perform the operations. For more information, see [Overview](https://help.aliyun.com/document_detail/113600.html).
   * 
   * @example
   * a6e49sfgd23p5g9ja7095863****
   */
  forbiddenMediaIds?: string;
  /**
   * @remarks
   * The ID of the refresh or prefetch task.
   * 
   * @example
   * 41d465e31957****
   */
  mediaRefreshJobId?: string;
  /**
   * @remarks
   * The IDs of the media files that do not exist.
   * 
   * @example
   * ca3a8f6e4957b658067095869****
   */
  nonExistMediaIds?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 25818875-5F78-4AF6-04D5-D7393642****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      forbiddenMediaIds: 'ForbiddenMediaIds',
      mediaRefreshJobId: 'MediaRefreshJobId',
      nonExistMediaIds: 'NonExistMediaIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forbiddenMediaIds: 'string',
      mediaRefreshJobId: 'string',
      nonExistMediaIds: 'string',
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

