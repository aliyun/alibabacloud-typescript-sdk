// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachWhitelistTemplateToInstanceResponseBodyDataDetachFailList extends $dara.Model {
  /**
   * @example
   * my-database
   */
  DBInstanceId?: string;
  /**
   * @example
   * 处理异常
   */
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
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

export class DetachWhitelistTemplateToInstanceResponseBodyDataDetachSuccessedListTemplatesDbInstances extends $dara.Model {
  /**
   * @example
   * asdfwef
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

export class DetachWhitelistTemplateToInstanceResponseBodyDataDetachSuccessedListTemplates extends $dara.Model {
  dbInstances?: DetachWhitelistTemplateToInstanceResponseBodyDataDetachSuccessedListTemplatesDbInstances[];
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
   * demo_template
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
      dbInstances: { 'type': 'array', 'itemType': DetachWhitelistTemplateToInstanceResponseBodyDataDetachSuccessedListTemplatesDbInstances },
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

export class DetachWhitelistTemplateToInstanceResponseBodyDataDetachSuccessedList extends $dara.Model {
  /**
   * @example
   * my-database
   */
  DBInstanceId?: string;
  templates?: DetachWhitelistTemplateToInstanceResponseBodyDataDetachSuccessedListTemplates[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      templates: 'Templates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      templates: { 'type': 'array', 'itemType': DetachWhitelistTemplateToInstanceResponseBodyDataDetachSuccessedListTemplates },
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

export class DetachWhitelistTemplateToInstanceResponseBodyData extends $dara.Model {
  detachFailList?: DetachWhitelistTemplateToInstanceResponseBodyDataDetachFailList[];
  detachSuccessedList?: DetachWhitelistTemplateToInstanceResponseBodyDataDetachSuccessedList[];
  /**
   * @example
   * ok
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      detachFailList: 'DetachFailList',
      detachSuccessedList: 'DetachSuccessedList',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detachFailList: { 'type': 'array', 'itemType': DetachWhitelistTemplateToInstanceResponseBodyDataDetachFailList },
      detachSuccessedList: { 'type': 'array', 'itemType': DetachWhitelistTemplateToInstanceResponseBodyDataDetachSuccessedList },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.detachFailList)) {
      $dara.Model.validateArray(this.detachFailList);
    }
    if(Array.isArray(this.detachSuccessedList)) {
      $dara.Model.validateArray(this.detachSuccessedList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachWhitelistTemplateToInstanceResponseBody extends $dara.Model {
  data?: DetachWhitelistTemplateToInstanceResponseBodyData;
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
      data: DetachWhitelistTemplateToInstanceResponseBodyData,
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

