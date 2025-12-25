// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTicketsResponseBodyDataStatus extends $dara.Model {
  /**
   * @remarks
   * Status description, if completed
   * 
   * @example
   * Completed
   */
  label?: string;
  /**
   * @remarks
   * A status value, such as 6, represents completed
   * 
   * @example
   * 6
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTicketsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The status of the ticket. The reference values are as follows 1, "assigned", "Pending Response", 2, "handling", "handling", 3, "wait_feedback", "Pending feedback", 4: "feedback", "Feedback", 5, "wait_confirm", "To be confirmed", 6, "confirmed", "Completed"
   */
  status?: ListTicketsResponseBodyDataStatus;
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
   * The title of the ticket.
   * 
   * @example
   * Why ECS backup failed?
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      ticketId: 'TicketId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: ListTicketsResponseBodyDataStatus,
      ticketId: 'string',
      title: 'string',
    };
  }

  validate() {
    if(this.status && typeof (this.status as any).validate === 'function') {
      (this.status as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTicketsResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The return code of the request result.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The return value is my ticket list data.
   */
  data?: ListTicketsResponseBodyData[];
  /**
   * @remarks
   * The error message. If success is set to false, the message is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Page number of the paging query parameter
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in a pagination query parameter.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The unique ID of the API request. The requestID is unique for each call.
   * 
   * @example
   * AC0AB2EC-AFBC-44BA-AE77-132A5A1EC0AD
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. A value of true indicates that the call is normal.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of query results, that is, the total number of my ticket records.
   * 
   * @example
   * 99
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      data: { 'type': 'array', 'itemType': ListTicketsResponseBodyData },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

