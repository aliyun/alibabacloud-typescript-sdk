// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApiTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  /**
   * @remarks
   * Template ID (to be deprecated).
   * 
   * @example
   * at-41b4c6a0fc63****
   */
  success?: string;
  /**
   * @remarks
   * Template ID (it is recommended to use the parameter TemplateId).
   * 
   * @example
   * at-41b4c6a0fc63****
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'string',
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

