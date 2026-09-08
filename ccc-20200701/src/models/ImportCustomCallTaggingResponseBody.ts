// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportCustomCallTaggingResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of the inbound number tag that failed to be created.
   * 
   * @example
   * 1312121****
   */
  item?: string;
  /**
   * @remarks
   * The reason why the inbound number tag creation failed.
   * 
   * @example
   * CUSTOM_NUMBER_DUPLICATED
   */
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: 'string',
      reason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportCustomCallTaggingResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The list of inbound number tags that failed to be created.
   */
  data?: ImportCustomCallTaggingResponseBodyData[];
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
   * The response message.
   * 
   * @example
   * 无
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BA03159C-E808-4FF1-B27E-A61B6E888D7F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ImportCustomCallTaggingResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

