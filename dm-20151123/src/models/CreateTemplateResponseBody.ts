// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D1C7F6E1-6A4D-50B5-B864-640E9FCA8D0A
   */
  requestId?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * 415366
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

