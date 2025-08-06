// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDefaultAITemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8E70E3F8-E2EE-47BC-4677-379D6F28****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the AI template.
   * 
   * @example
   * 1706a0063dd733f6a823ef32e0a5****
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
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

