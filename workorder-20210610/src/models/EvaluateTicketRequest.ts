// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EvaluateTicketRequest extends $dara.Model {
  /**
   * @remarks
   * Comment
   * 
   * @example
   * The engineer solved my issue.
   */
  content?: string;
  /**
   * @remarks
   * Rating star 1-5 stars
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  score?: string;
  /**
   * @remarks
   * Whether to resolve
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  solved?: boolean;
  /**
   * @remarks
   * The ID of the ticket.
   * 
   * This parameter is required.
   * 
   * @example
   * 001ET1BU1P
   */
  ticketId?: string;
  /**
   * @remarks
   * UID
   * 
   * @example
   * 1902070573958003
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      score: 'Score',
      solved: 'Solved',
      ticketId: 'TicketId',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      score: 'string',
      solved: 'boolean',
      ticketId: 'string',
      uid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

