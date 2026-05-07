// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteJobTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * 本次请求的 ID，用于诊断和答疑。
   * 
   * @example
   * 78F6FCE2-278F-4C4A-A6B7-DD8ECEA****
   */
  requestId?: string;
  /**
   * @example
   * tplwk80096dw****
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

