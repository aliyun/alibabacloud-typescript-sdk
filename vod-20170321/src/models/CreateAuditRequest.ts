// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAuditRequest extends $dara.Model {
  /**
   * @remarks
   * The review content. You can specify up to **100** audio or video files in a request. The value must be converted to a string.\\
   * For more information about this parameter, see the **AuditContent** section of this topic.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"VideoId":"93ab850b4f*****b54b6e91d24d81d4","Status":"Normal"},{"VideoId":"f867fbfb58*****8bbab65c4480ae1d","Status":"Blocked","Reason":"porn video","Comment":"porn video"}]
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

