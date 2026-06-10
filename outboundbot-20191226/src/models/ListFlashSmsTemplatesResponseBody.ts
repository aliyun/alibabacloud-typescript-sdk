// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFlashSmsTemplatesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The content of the template.
   * 
   * @example
   * 您好，xxx来电。
   */
  templateContent?: string;
  /**
   * @remarks
   * The ID of the flash SMS template.
   * 
   * @example
   * 17*******************01
   */
  templateId?: string;
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * 模板1
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      templateContent: 'TemplateContent',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateContent: 'string',
      templateId: 'string',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlashSmsTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListFlashSmsTemplatesResponseBodyData[];
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
   * The error message.
   * 
   * @example
   * 无
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EC08CC41-6870-5594-939A-F758F057898F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call succeeded. A value of true indicates a successful call. A value of false indicates a failed call.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
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
      data: { 'type': 'array', 'itemType': ListFlashSmsTemplatesResponseBodyData },
      httpStatusCode: 'number',
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

