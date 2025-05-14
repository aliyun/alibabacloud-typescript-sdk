// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateCustomTemplateResponseBodyCustomTemplate } from "./CreateCustomTemplateResponseBodyCustomTemplate";


export class CreateCustomTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The template information.
   */
  customTemplate?: CreateCustomTemplateResponseBodyCustomTemplate;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      customTemplate: 'CustomTemplate',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customTemplate: CreateCustomTemplateResponseBodyCustomTemplate,
      requestId: 'string',
    };
  }

  validate() {
    if(this.customTemplate && typeof (this.customTemplate as any).validate === 'function') {
      (this.customTemplate as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

