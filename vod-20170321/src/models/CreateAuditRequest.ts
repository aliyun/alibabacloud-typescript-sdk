// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAuditRequest extends $dara.Model {
  /**
   * @remarks
   * The array of review content. A maximum of **100** audio or video review items are supported at a time. You must convert the array to a string before passing it as a parameter value. For the specific parameter structure definition, see the **AuditContent** table below.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"VideoId":"93ab850b4f*****b54b6e91d24d81d4","Status":"Normal"},{"VideoId":"f867fbfb58*****8bbab65c4480ae1d","Status":"Blocked","Reason":"Pornographic video","Comment":"Contains explicit content"}]
   */
  auditContent?: string;
  static names(): { [key: string]: string } {
    return {
      auditContent: 'AuditContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditContent: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

