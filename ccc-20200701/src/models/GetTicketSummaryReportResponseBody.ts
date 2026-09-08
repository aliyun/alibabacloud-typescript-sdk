// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTicketSummaryReportResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Number of tickets pending processing.
   * 
   * @example
   * 3
   */
  ticketsAssigned?: string;
  /**
   * @remarks
   * Number of tickets created.
   * 
   * @example
   * 10
   */
  ticketsCreated?: string;
  /**
   * @remarks
   * Number of tickets processed.
   * 
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

export class GetTicketSummaryReportResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Data.
   */
  data?: GetTicketSummaryReportResponseBodyData;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * 无
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * EAF3C248-E123-441B-A545-B6CD02E98EED
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetTicketSummaryReportResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
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

