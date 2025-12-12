// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AttachWhitelistTemplateToInstanceResponseBodyDataAttachFailList extends $dara.Model {
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

export class AttachWhitelistTemplateToInstanceResponseBodyDataAttachSuccessedListTemplatesDbInstances extends $dara.Model {
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

export class AttachWhitelistTemplateToInstanceResponseBodyDataAttachSuccessedListTemplates extends $dara.Model {
  dbInstances?: AttachWhitelistTemplateToInstanceResponseBodyDataAttachSuccessedListTemplatesDbInstances[];
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
      dbInstances: { 'type': 'array', 'itemType': AttachWhitelistTemplateToInstanceResponseBodyDataAttachSuccessedListTemplatesDbInstances },
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

export class AttachWhitelistTemplateToInstanceResponseBodyDataAttachSuccessedList extends $dara.Model {
  /**
   * @example
   * my-database
   */
  DBInstanceId?: string;
  templates?: AttachWhitelistTemplateToInstanceResponseBodyDataAttachSuccessedListTemplates[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      templates: 'Templates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      templates: { 'type': 'array', 'itemType': AttachWhitelistTemplateToInstanceResponseBodyDataAttachSuccessedListTemplates },
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

export class AttachWhitelistTemplateToInstanceResponseBodyData extends $dara.Model {
  attachFailList?: AttachWhitelistTemplateToInstanceResponseBodyDataAttachFailList[];
  attachSuccessedList?: AttachWhitelistTemplateToInstanceResponseBodyDataAttachSuccessedList[];
  /**
   * @example
   * ok
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      attachFailList: 'AttachFailList',
      attachSuccessedList: 'AttachSuccessedList',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachFailList: { 'type': 'array', 'itemType': AttachWhitelistTemplateToInstanceResponseBodyDataAttachFailList },
      attachSuccessedList: { 'type': 'array', 'itemType': AttachWhitelistTemplateToInstanceResponseBodyDataAttachSuccessedList },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attachFailList)) {
      $dara.Model.validateArray(this.attachFailList);
    }
    if(Array.isArray(this.attachSuccessedList)) {
      $dara.Model.validateArray(this.attachSuccessedList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachWhitelistTemplateToInstanceResponseBody extends $dara.Model {
  data?: AttachWhitelistTemplateToInstanceResponseBodyData;
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
      data: AttachWhitelistTemplateToInstanceResponseBodyData,
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

