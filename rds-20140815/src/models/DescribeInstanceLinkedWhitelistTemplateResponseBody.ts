// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceLinkedWhitelistTemplateResponseBodyDataTemplates extends $dara.Model {
  /**
   * @remarks
   * The primary key of the data table.
   * 
   * @example
   * 1884
   */
  id?: number;
  /**
   * @remarks
   * The IP addresses.
   * 
   * @example
   * 12.0.X.X,10.2.X.X
   */
  ips?: string;
  /**
   * @remarks
   * The whitelist template ID.
   * 
   * @example
   * 412
   */
  templateId?: number;
  /**
   * @remarks
   * The whitelist template name.
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

export class DescribeInstanceLinkedWhitelistTemplateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * rm-bp191w771kd3****
   */
  insName?: string;
  /**
   * @remarks
   * The information about whitelists that are returned by page.
   */
  templates?: DescribeInstanceLinkedWhitelistTemplateResponseBodyDataTemplates[];
  static names(): { [key: string]: string } {
    return {
      insName: 'InsName',
      templates: 'Templates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      insName: 'string',
      templates: { 'type': 'array', 'itemType': DescribeInstanceLinkedWhitelistTemplateResponseBodyDataTemplates },
    };
  }

  validate() {
    if(Array.isArray(this.templates)) {
      $dara.Model.validateArray(this.templates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceLinkedWhitelistTemplateResponseBody extends $dara.Model {
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
  data?: DescribeInstanceLinkedWhitelistTemplateResponseBodyData;
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
   * The returned message.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1E43AAE0-BEE8-43DA-860D-EAF2AA0724DC
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
      data: DescribeInstanceLinkedWhitelistTemplateResponseBodyData,
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

