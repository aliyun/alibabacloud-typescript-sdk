// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTicketsRequest extends $dara.Model {
  /**
   * @remarks
   * The deadline for ticket creation. This parameter is used in conjunction with StartDate to query tickets submitted within the specified start and end time ranges.
   * 
   * @example
   * 1623396736000
   */
  endDate?: number;
  /**
   * @remarks
   * The ticket keyword, which is used for fuzzy search to match the content of the Description field when a ticket is created.
   * 
   * @example
   * ecs
   */
  keyword?: string;
  /**
   * @remarks
   * Paging query page number parameters
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries queried by page parameter
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The time when the ticket was created. This parameter is used with EndDate to query tickets that are created within the specified start and end time ranges.
   * 
   * @example
   * 1623396736000
   */
  startDate?: number;
  /**
   * @remarks
   * Multiple ticket statuses
   * 
   * @example
   * 6
   */
  statusList?: string[];
  /**
   * @remarks
   * Work Order Number
   * 
   * @example
   * 0005PYGCW
   */
  ticketId?: string;
  /**
   * @remarks
   * Multiple job numbers
   */
  ticketIdList?: string[];
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
      endDate: 'EndDate',
      keyword: 'Keyword',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startDate: 'StartDate',
      statusList: 'StatusList',
      ticketId: 'TicketId',
      ticketIdList: 'TicketIdList',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'number',
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startDate: 'number',
      statusList: { 'type': 'array', 'itemType': 'string' },
      ticketId: 'string',
      ticketIdList: { 'type': 'array', 'itemType': 'string' },
      uid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.statusList)) {
      $dara.Model.validateArray(this.statusList);
    }
    if(Array.isArray(this.ticketIdList)) {
      $dara.Model.validateArray(this.ticketIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

