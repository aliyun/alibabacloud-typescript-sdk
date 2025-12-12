// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWhitelistTemplatesResponseBodyDataTemplatesDbInstances extends $dara.Model {
  /**
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
  dbInstances?: ListWhitelistTemplatesResponseBodyDataTemplatesDbInstances[];
  /**
   * @example
   * 192.168.1.1,10.0.0.1
   */
  securityIPList?: string;
  /**
   * @example
   * g-asdfwem
   */
  templateId?: string;
  /**
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
   * @example
   * 1
   */
  currPageNumbers?: number;
  /**
   * @example
   * true
   */
  hasNext?: boolean;
  /**
   * @example
   * false
   */
  hasPrev?: boolean;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  templates?: ListWhitelistTemplatesResponseBodyDataTemplates[];
  /**
   * @example
   * 30
   */
  totalCount?: number;
  /**
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
  data?: ListWhitelistTemplatesResponseBodyData;
  /**
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

