// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReadWebhookContactSendTemplateListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The template code.
   * 
   * @example
   * lark
   */
  code?: string;
  /**
   * @remarks
   * The template.
   * 
   * @example
   * /
   */
  template?: any;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      template: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReadWebhookContactSendTemplateListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The returned result.
   */
  data?: ReadWebhookContactSendTemplateListResponseBodyData[];
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 2xx
   */
  httpCode?: number;
  /**
   * @remarks
   * The business message.
   * 
   * @example
   * Succeeded
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A5F62766-1C2F-1F56-A39D-63E3D30F0633
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
      data: 'Data',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ReadWebhookContactSendTemplateListResponseBodyData },
      httpCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

