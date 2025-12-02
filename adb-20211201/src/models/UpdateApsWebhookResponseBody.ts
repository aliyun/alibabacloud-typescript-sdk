// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApsWebhookResponseBody extends $dara.Model {
  /**
   * @remarks
   * The code of the returned result.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * amv-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * -
   */
  data?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The returned message.
   */
  message?: string;
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * exampleRequestId
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      DBClusterId: 'DBClusterId',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      DBClusterId: 'string',
      data: 'string',
      httpStatusCode: 'number',
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

