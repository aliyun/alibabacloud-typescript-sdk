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
   * The list of IP addresses.
   * 
   * @example
   * 12.0.X.X,10.2.X.X
   */
  ips?: string;
  /**
   * @remarks
   * The ID of the whitelist template.
   * 
   * @example
   * 412
   */
  templateId?: number;
  /**
   * @remarks
   * The name of the whitelist template.
   * 
   * @example
   * template_123
   */
  templateName?: string;
  /**
   * @remarks
   * The ID of the user.
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
   * The name of the instance.
   * 
   * @example
   * rm-bp191w771k******
   */
  insName?: string;
  /**
   * @remarks
   * The paginated whitelist template information.
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
   * The response code. Valid values:
   * - **200**: Normal.
   * - **400**: Client error.
   * - **401**: Authentication failed.
   * - **404**: The requested page is not found.
   * - **500**: Server error.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The list of returned data.
   */
  data?: DescribeInstanceLinkedWhitelistTemplateResponseBodyData;
  /**
   * @remarks
   * The HTTP status code. Valid values:
   * - **200**: Normal.
   * - **400**: Client error.
   * - **500**: Server error.
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
   * The ID of the request.
   * 
   * @example
   * 1E43AAE0-BEE8-43DA-860D-EAF2AA0724DC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * - **true**: The request is successful.
   * - **false**: The request failed.
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

