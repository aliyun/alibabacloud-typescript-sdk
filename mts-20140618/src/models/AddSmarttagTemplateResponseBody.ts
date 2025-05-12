// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddSmarttagTemplateResponseBody extends $dara.Model {
  /**
   * @example
   * 7B117AF5-2A16-412C-B127-FA6175EDAS3Q
   */
  requestId?: string;
  /**
   * @example
   * 05de22f255284c7a8d2aab535dde****
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

