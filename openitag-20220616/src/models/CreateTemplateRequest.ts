// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TemplateDTO } from "./TemplateDto";


export class CreateTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * Template information.
   * 
   * This parameter is required.
   */
  body?: TemplateDTO;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: TemplateDTO,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

