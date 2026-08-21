// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefreshMediaPlayUrlsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of audio or video IDs that are forbidden. This is typically because you do not have multi-application permissions. For more information, see [Multi-application](https://help.aliyun.com/document_detail/113600.html).
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
   * The list of audio or video IDs that do not exist.
   * 
   * @example
   * ca3a8f6e4957b658067095869****
   */
  nonExistMediaIds?: string;
  /**
   * @remarks
   * The request ID.
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

