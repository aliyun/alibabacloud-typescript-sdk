// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDocTranslateTaskResponseBody extends $dara.Model {
  /**
   * @example
   * 20
   */
  pageCount?: number;
  /**
   * @example
   * 12952E92-FDF3-4D3C-88E3-242D72BA7150
   */
  requestId?: string;
  /**
   * @example
   * translated
   */
  status?: string;
  /**
   * @example
   * 0586df512c8b4bb382d7d9a6a01b5854
   */
  taskId?: string;
  /**
   * @example
   * Error
   */
  translateErrorCode?: string;
  /**
   * @example
   * Fail to get the page number of document.
   */
  translateErrorMessage?: string;
  /**
   * @example
   * http://translateFileUrl
   */
  translateFileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      pageCount: 'PageCount',
      requestId: 'RequestId',
      status: 'Status',
      taskId: 'TaskId',
      translateErrorCode: 'TranslateErrorCode',
      translateErrorMessage: 'TranslateErrorMessage',
      translateFileUrl: 'TranslateFileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageCount: 'number',
      requestId: 'string',
      status: 'string',
      taskId: 'string',
      translateErrorCode: 'string',
      translateErrorMessage: 'string',
      translateFileUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

