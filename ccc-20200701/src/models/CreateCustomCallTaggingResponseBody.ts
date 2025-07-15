// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomCallTaggingResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1312121****
   */
  item?: string;
  /**
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

export class CreateCustomCallTaggingResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: CreateCustomCallTaggingResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  /**
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
      data: { 'type': 'array', 'itemType': CreateCustomCallTaggingResponseBodyData },
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

