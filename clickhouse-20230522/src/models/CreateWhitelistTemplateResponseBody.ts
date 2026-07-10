// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWhitelistTemplateResponseBodyDataTemplates extends $dara.Model {
  /**
   * @remarks
   * The list of IP addresses in the whitelist.
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
      securityIPList: 'SecurityIPList',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityIPList: 'string',
      templateId: 'string',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWhitelistTemplateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of whitelist templates.
   */
  templates?: CreateWhitelistTemplateResponseBodyDataTemplates[];
  static names(): { [key: string]: string } {
    return {
      templates: 'Templates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templates: { 'type': 'array', 'itemType': CreateWhitelistTemplateResponseBodyDataTemplates },
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

export class CreateWhitelistTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: CreateWhitelistTemplateResponseBodyData;
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
      data: CreateWhitelistTemplateResponseBodyData,
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

