// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTicketRequestSceneContextGroupMsgs extends $dara.Model {
  /**
   * @example
   * true
   */
  anchor?: boolean;
  /**
   * @example
   * 1234567
   */
  openMsgId?: string;
  static names(): { [key: string]: string } {
    return {
      anchor: 'Anchor',
      openMsgId: 'OpenMsgId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anchor: 'boolean',
      openMsgId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

