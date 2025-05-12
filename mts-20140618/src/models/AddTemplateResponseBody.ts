// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddTemplateResponseBodyTemplate } from "./AddTemplateResponseBodyTemplate";


export class AddTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * FA258E67-09B8-4EAA-8F33-BA567834A2C3
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the transcoding template.
   */
  template?: AddTemplateResponseBodyTemplate;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      template: AddTemplateResponseBodyTemplate,
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

