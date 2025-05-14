// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetSystemTemplateResponseBodySystemTemplate } from "./GetSystemTemplateResponseBodySystemTemplate";


export class GetSystemTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  /**
   * @remarks
   * The template information.
   */
  systemTemplate?: GetSystemTemplateResponseBodySystemTemplate;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      systemTemplate: 'SystemTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      systemTemplate: GetSystemTemplateResponseBodySystemTemplate,
    };
  }

  validate() {
    if(this.systemTemplate && typeof (this.systemTemplate as any).validate === 'function') {
      (this.systemTemplate as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

