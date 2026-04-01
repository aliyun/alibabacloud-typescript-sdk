// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAllWhitelistTemplateResponseBodyDataTemplates extends $dara.Model {
  /**
   * @remarks
   * The primary key of the data table.
   * 
   * @example
   * 123
   */
  id?: number;
  /**
   * @remarks
   * The IP addresses.
   * 
   * @example
   * 12.2.X.X,10.0.X.X
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
   * The user ID.
   * 
   * @example
   * 168****
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

export class DescribeAllWhitelistTemplateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  currPageNumbers?: number;
  /**
   * @remarks
   * Indicates whether the data that meets the conditions is displayed on the next page. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  hasNext?: boolean;
  /**
   * @remarks
   * Indicates whether the data that meets the conditions is displayed on the previous page. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  hasPrev?: boolean;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  maxRecordsPerPage?: number;
  /**
   * @remarks
   * The information about whitelist templates that are returned by page.
   */
  templates?: DescribeAllWhitelistTemplateResponseBodyDataTemplates[];
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * 3
   */
  totalPageNumbers?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 402
   */
  totalRecords?: number;
  static names(): { [key: string]: string } {
    return {
      currPageNumbers: 'CurrPageNumbers',
      hasNext: 'HasNext',
      hasPrev: 'HasPrev',
      maxRecordsPerPage: 'MaxRecordsPerPage',
      templates: 'Templates',
      totalPageNumbers: 'TotalPageNumbers',
      totalRecords: 'TotalRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currPageNumbers: 'number',
      hasNext: 'boolean',
      hasPrev: 'boolean',
      maxRecordsPerPage: 'number',
      templates: { 'type': 'array', 'itemType': DescribeAllWhitelistTemplateResponseBodyDataTemplates },
      totalPageNumbers: 'number',
      totalRecords: 'number',
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

export class DescribeAllWhitelistTemplateResponseBody extends $dara.Model {
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
  data?: DescribeAllWhitelistTemplateResponseBodyData;
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
   * 16C62438-491B-5C02-9B49-BA924A1372A2
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
      data: DescribeAllWhitelistTemplateResponseBodyData,
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

