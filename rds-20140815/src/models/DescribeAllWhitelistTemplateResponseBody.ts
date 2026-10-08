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
   * The IP address list.
   * 
   * @example
   * 12.2.X.X,10.0.X.X
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
   * Indicates whether there is a next page of data that meets the conditions. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  hasNext?: boolean;
  /**
   * @remarks
   * Indicates whether there is a previous page of data that meets the conditions. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * false
   */
  hasPrev?: boolean;
  /**
   * @remarks
   * The number of records per page.
   * 
   * @example
   * 10
   */
  maxRecordsPerPage?: number;
  /**
   * @remarks
   * The whitelist template information returned by page.
   */
  templates?: DescribeAllWhitelistTemplateResponseBodyDataTemplates[];
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 3
   */
  totalPageNumbers?: number;
  /**
   * @remarks
   * The total number of records.
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
   * The response code. Valid values:
   * - **200**: Normal.
   * - **400**: Client fault.
   * - **401**: Authentication failed.
   * - **404**: Request page not found.
   * - **500**: Server fault.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: DescribeAllWhitelistTemplateResponseBodyData;
  /**
   * @remarks
   * The HTTP status code. Valid values:
   * - **200**: Success.
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
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: Successful.
   * - **false**: Failed.
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

