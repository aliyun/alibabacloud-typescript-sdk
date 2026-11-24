// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddManifestEditTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * **The request ID.**
   * 
   * @example
   * req-001
   */
  requestId?: string;
  /**
   * @remarks
   * **The ID of the new template.**
   * 
   * @example
   * met-abc123
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

