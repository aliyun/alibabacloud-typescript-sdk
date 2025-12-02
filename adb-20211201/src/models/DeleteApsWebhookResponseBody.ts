// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteApsWebhookResponseBody extends $dara.Model {
  /**
   * @remarks
   * API status or POP error code.
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
   * amv-uf63i4ij56b***
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * []
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

