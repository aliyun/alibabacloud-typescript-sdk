// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTicketSummaryReportResponseBodyData extends $dara.Model {
  /**
   * @example
   * 3
   */
  ticketsAssigned?: string;
  /**
   * @example
   * 10
   */
  ticketsCreated?: string;
  /**
   * @example
   * 5
   */
  ticketsParticipated?: string;
  static names(): { [key: string]: string } {
    return {
      ticketsAssigned: 'TicketsAssigned',
      ticketsCreated: 'TicketsCreated',
      ticketsParticipated: 'TicketsParticipated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ticketsAssigned: 'string',
      ticketsCreated: 'string',
      ticketsParticipated: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

