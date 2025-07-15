// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCallTagsResponseBodyData extends $dara.Model {
  /**
   * @example
   * TagC
   */
  item?: string;
  /**
   * @example
   * CALL_TAG_NAME_DUPLICATED
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

export class CreateCallTagsResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: CreateCallTagsResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  /**
   * @example
   * EEEE671A-3E24-4A04-81E6-6C4F5B39DF75
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
      data: { 'type': 'array', 'itemType': CreateCallTagsResponseBodyData },
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

