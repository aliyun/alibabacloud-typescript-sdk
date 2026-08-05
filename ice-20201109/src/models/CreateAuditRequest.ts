// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAuditRequest extends $dara.Model {
  /**
   * @remarks
   * The array of review content. A maximum of 20 videos can be reviewed at a time. Convert the array to a string before passing it as the parameter value. For the specific parameter structure, see the AuditContent table below.
   * 
   * This parameter is required.
   * 
   * @example
   * [
   *       {
   *             "MediaId": "93ab850b4f*****b54b6e91d24d81d4",
   *             "Status": "Normal"
   *       },
   *       {
   *             "MediaId": "f867fbfb58*****8bbab65c4480ae1d",
   *             "Status": "Blocked",
   *             "Reason": "xxxx",
   *             "Comment": "xxxx"
   *       }
   * ]
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

