// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAppViewTemplateRequestTemplate extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xd4c****
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

export class DeleteAppViewTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * wv7N****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  template?: DeleteAppViewTemplateRequestTemplate;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      template: DeleteAppViewTemplateRequestTemplate,
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

