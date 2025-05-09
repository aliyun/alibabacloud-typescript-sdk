// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateTemplateResponseBodyTemplate } from "./CreateTemplateResponseBodyTemplate";


export class CreateTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F534F
   */
  requestId?: string;
  /**
   * @remarks
   * The metadata of the template.
   */
  template?: CreateTemplateResponseBodyTemplate;
  /**
   * @remarks
   * The type of the template.
   * 
   * @example
   * Private
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      template: 'Template',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      template: CreateTemplateResponseBodyTemplate,
      templateType: 'string',
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

