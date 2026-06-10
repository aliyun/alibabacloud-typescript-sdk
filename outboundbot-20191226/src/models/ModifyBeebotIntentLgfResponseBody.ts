// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBeebotIntentLgfResponseBody extends $dara.Model {
  /**
   * @remarks
   * Internal Request ID
   * 
   * @example
   * A1F21BF2-CB21-1968-8039-C74699E7DDEB
   */
  beebotRequestId?: string;
  /**
   * @remarks
   * status code
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Utterance Template ID
   * 
   * @example
   * 5666117
   */
  lgfId?: number;
  /**
   * @remarks
   * Response message
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 302C67BD-19FF-5B66-A45D-F95544604155
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation succeeded.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      beebotRequestId: 'BeebotRequestId',
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      lgfId: 'LgfId',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beebotRequestId: 'string',
      code: 'string',
      httpStatusCode: 'number',
      lgfId: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

