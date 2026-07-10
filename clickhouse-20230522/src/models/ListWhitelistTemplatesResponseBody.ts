// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWhitelistTemplatesResponseBodyDataTemplatesDbInstances extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * cc-asdfwef
   */
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWhitelistTemplatesResponseBodyDataTemplates extends $dara.Model {
  /**
   * @remarks
   * The list of associated instances.
   */
  dbInstances?: ListWhitelistTemplatesResponseBodyDataTemplatesDbInstances[];
  /**
   * @remarks
   * The IP address whitelist.
   * 
   * @example
   * 192.168.1.1,10.0.0.1
   */
  securityIPList?: string;
  /**
   * @remarks
   * The whitelist template ID.
   * 
   * @example
   * g-asdfwem
   */
  templateId?: string;
  /**
   * @remarks
   * The whitelist template name.
   * 
   * @example
   * g-asdfwem
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      dbInstances: 'DbInstances',
      securityIPList: 'SecurityIPList',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstances: { 'type': 'array', 'itemType': ListWhitelistTemplatesResponseBodyDataTemplatesDbInstances },
      securityIPList: 'string',
      templateId: 'string',
      templateName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dbInstances)) {
      $dara.Model.validateArray(this.dbInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWhitelistTemplatesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currPageNumbers?: number;
  /**
   * @remarks
   * Whether a next page exists.
   * 
   * @example
   * true
   */
  hasNext?: boolean;
  /**
   * @remarks
   * Whether a previous page exists.
   * 
   * @example
   * false
   */
  hasPrev?: boolean;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of whitelist templates.
   */
  templates?: ListWhitelistTemplatesResponseBodyDataTemplates[];
  /**
   * @remarks
   * The total number of templates.
   * 
   * @example
   * 30
   */
  totalCount?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 2
   */
  totalPageNumbers?: number;
  static names(): { [key: string]: string } {
    return {
      currPageNumbers: 'CurrPageNumbers',
      hasNext: 'HasNext',
      hasPrev: 'HasPrev',
      pageSize: 'PageSize',
      templates: 'Templates',
      totalCount: 'TotalCount',
      totalPageNumbers: 'TotalPageNumbers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currPageNumbers: 'number',
      hasNext: 'boolean',
      hasPrev: 'boolean',
      pageSize: 'number',
      templates: { 'type': 'array', 'itemType': ListWhitelistTemplatesResponseBodyDataTemplates },
      totalCount: 'number',
      totalPageNumbers: 'number',
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

export class ListWhitelistTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The query results.
   */
  data?: ListWhitelistTemplatesResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1234567890
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListWhitelistTemplatesResponseBodyData,
      requestId: 'string',
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

