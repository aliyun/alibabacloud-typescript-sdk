// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAppRecordTemplateRequestTemplate extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2xh6****
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppRecordTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ac7N****
   */
  appId?: string;
  /**
   * @example
   * 53200b81-b761-4c10-842a-a0726d97xxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  template?: DeleteAppRecordTemplateRequestTemplate;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clientToken: 'ClientToken',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clientToken: 'string',
      template: DeleteAppRecordTemplateRequestTemplate,
    };
  }

  validate() {
    if(this.template && typeof (this.template as any).validate === 'function') {
      (this.template as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

