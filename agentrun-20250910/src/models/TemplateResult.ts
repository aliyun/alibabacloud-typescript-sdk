// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Template } from "./Template";


export class TemplateResult extends $dara.Model {
  /**
   * @remarks
   * SUCCESS indicates success. In case of failure, the corresponding Error Type is returned.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * Detailed information about the template
   * 
   * This parameter is required.
   */
  data?: Template;
  /**
   * @remarks
   * Unique request ID used for troubleshooting
   * 
   * @example
   * F8A0F5F3-0C3E-4C82-9D4F-5E4B6A7C8D9E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: Template,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

