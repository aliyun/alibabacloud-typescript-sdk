// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWhitelistTemplateResponseBodyDataTemplate extends $dara.Model {
  /**
   * @remarks
   * The primary key of the data table.
   * 
   * @example
   * 1013
   */
  id?: number;
  /**
   * @remarks
   * The IP addresses.
   * 
   * @example
   * 10.1.X.X,2.3.X.X
   */
  ips?: string;
  /**
   * @remarks
   * The ID of the whitelist template.
   * 
   * @example
   * 424
   */
  templateId?: number;
  /**
   * @remarks
   * The name of the IP whitelist template.
   * 
   * @example
   * template_123
   */
  templateName?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 16****
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      ips: 'Ips',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      ips: 'string',
      templateId: 'number',
      templateName: 'string',
      userId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWhitelistTemplateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The information about the IP whitelist template.
   */
  template?: DescribeWhitelistTemplateResponseBodyDataTemplate;
  static names(): { [key: string]: string } {
    return {
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      template: DescribeWhitelistTemplateResponseBodyDataTemplate,
    };
  }

  validate() {
    if(this.template && typeof (this.template as any).validate === 'function') {
      (this.template as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWhitelistTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code returned. Valid values:
   * 
   * *   **200**: success
   * *   **400**: client error
   * *   **401**: identity authentication failed
   * *   **404**: request page not found
   * *   **500**: server error
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: DescribeWhitelistTemplateResponseBodyData;
  /**
   * @remarks
   * The HTTP status code returned. Valid values:
   * 
   * *   **200**: success
   * *   **400**: client error
   * *   **500**: server error
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The response parameters.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ED169A3E-1657-4104-82AB-24EA8CD0DB75
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   **true**
   * *   **false**
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
      data: DescribeWhitelistTemplateResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

