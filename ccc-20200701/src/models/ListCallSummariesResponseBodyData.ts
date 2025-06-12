// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCallSummariesResponseBodyData extends $dara.Model {
  /**
   * @example
   * job-544789******759424
   */
  contactId?: string;
  context?: string;
  /**
   * @example
   * 1723449513735
   */
  createdTime?: number;
  /**
   * @example
   * creator@ccc-test
   */
  creator?: string;
  /**
   * @example
   * editor@ccc-test
   */
  editor?: string;
  /**
   * @example
   * ac0dd304-****-****-****-4a90010f0d38
   */
  ticketId?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      context: 'Context',
      createdTime: 'CreatedTime',
      creator: 'Creator',
      editor: 'Editor',
      ticketId: 'TicketId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      context: 'string',
      createdTime: 'number',
      creator: 'string',
      editor: 'string',
      ticketId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

