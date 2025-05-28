// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ManualRunMailTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the email task in the subscription management interface.
   * 
   * This parameter is required.
   * 
   * @example
   * 3423423sdfa****sdadw
   */
  mailId?: string;
  static names(): { [key: string]: string } {
    return {
      mailId: 'MailId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mailId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

