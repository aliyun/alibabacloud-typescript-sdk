// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPromptResponseBody extends $dara.Model {
  /**
   * @example
   * {$PromptContent}
   */
  data?: any;
  /**
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * BDA59622-2114-5F68-A530-3FCACAF0F04F
   */
  requestId?: string;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      message: 'message',
      requestId: 'requestId',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'any',
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      statusCode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

