// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWhitelistTemplateResponseBodyDataTemplatesDbInstances extends $dara.Model {
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

export class GetWhitelistTemplateResponseBodyDataTemplates extends $dara.Model {
  /**
   * @remarks
   * The list of associated instances.
   */
  dbInstances?: GetWhitelistTemplateResponseBodyDataTemplatesDbInstances[];
  /**
   * @remarks
   * The IP whitelist.
   * 
   * @example
   * 192.168.1.1,10.0.0.1
   */
  securityIPList?: string;
  /**
   * @remarks
   * The ID of the whitelist template.
   * 
   * @example
   * g-asdfwem
   */
  templateId?: string;
  /**
   * @remarks
   * The name of the whitelist template.
   * 
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
      dbInstances: { 'type': 'array', 'itemType': GetWhitelistTemplateResponseBodyDataTemplatesDbInstances },
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

export class GetWhitelistTemplateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of whitelist templates.
   */
  templates?: GetWhitelistTemplateResponseBodyDataTemplates[];
  static names(): { [key: string]: string } {
    return {
      templates: 'Templates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templates: { 'type': 'array', 'itemType': GetWhitelistTemplateResponseBodyDataTemplates },
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

export class GetWhitelistTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The whitelist template details.
   */
  data?: GetWhitelistTemplateResponseBodyData;
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
      data: GetWhitelistTemplateResponseBodyData,
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

