// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWhitelistTemplateResponseBodyDataTemplatesDbInstances extends $dara.Model {
  /**
   * @example
   * asdfwef
   */
  dbInstanceName?: string;
  static names(): { [key: string]: string } {
    return {
      dbInstanceName: 'DbInstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstanceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWhitelistTemplateResponseBodyDataTemplates extends $dara.Model {
  dbInstances?: UpdateWhitelistTemplateResponseBodyDataTemplatesDbInstances[];
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
  static names(): { [key: string]: string } {
    return {
      dbInstances: 'DbInstances',
      securityIPList: 'SecurityIPList',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstances: { 'type': 'array', 'itemType': UpdateWhitelistTemplateResponseBodyDataTemplatesDbInstances },
      securityIPList: 'string',
      templateId: 'string',
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

export class UpdateWhitelistTemplateResponseBodyData extends $dara.Model {
  templates?: UpdateWhitelistTemplateResponseBodyDataTemplates[];
  static names(): { [key: string]: string } {
    return {
      templates: 'Templates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templates: { 'type': 'array', 'itemType': UpdateWhitelistTemplateResponseBodyDataTemplates },
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

export class UpdateWhitelistTemplateResponseBody extends $dara.Model {
  data?: UpdateWhitelistTemplateResponseBodyData;
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
      data: UpdateWhitelistTemplateResponseBodyData,
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

