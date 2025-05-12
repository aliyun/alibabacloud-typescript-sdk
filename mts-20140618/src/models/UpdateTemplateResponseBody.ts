// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateTemplateResponseBodyTemplate } from "./UpdateTemplateResponseBodyTemplate";


export class UpdateTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The type of the transcoding template.
   * 
   * @example
   * 5E4FB22E-B9EA-4E24-8FFC-B407EA71QW21
   */
  requestId?: string;
  /**
   * @remarks
   * The type of the transcoding template.
   */
  template?: UpdateTemplateResponseBodyTemplate;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      template: UpdateTemplateResponseBodyTemplate,
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

