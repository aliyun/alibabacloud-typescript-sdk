// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTicketResponseBodyDataSeverity extends $dara.Model {
  /**
   * @remarks
   * Enumeration Text
   * 
   * @example
   * Common
   */
  label?: string;
  /**
   * @remarks
   * Enumeration
   * 
   * @example
   * 1
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

export class GetTicketResponseBodyDataStatus extends $dara.Model {
  /**
   * @remarks
   * Status Enumeration Text
   * 
   * @example
   * Completed
   */
  label?: string;
  /**
   * @remarks
   * State enumeration value
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

export class GetTicketResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the ticket issue category.
   * 
   * @example
   * 7161
   */
  categoryId?: string;
  /**
   * @remarks
   * The timestamp when the ticket was created.
   * 
   * @example
   * 1623396736000
   */
  createTime?: number;
  /**
   * @remarks
   * The uid of the ticket creator.
   * 
   * @example
   * 1168025
   */
  creatorId?: string;
  /**
   * @remarks
   * The description of the ticket. Only pure text format is supported.
   * 
   * @example
   * Why ECS renewal failed?
   */
  description?: string;
  /**
   * @remarks
   * Urgency enumeration value, 1 for general problem, 2 for urgent problem
   */
  severity?: GetTicketResponseBodyDataSeverity;
  /**
   * @remarks
   * The status of the ticket. The reference values are as follows 1, "assigned", "Pending Response", 2, "handling", "handling", 3, "wait_feedback", "Pending feedback", 4: "feedback", "Feedback", 5, "wait_confirm", "To be confirmed", 6, "confirmed", "Completed"
   */
  status?: GetTicketResponseBodyDataStatus;
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
   * Why ECS renewal failed?
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      createTime: 'CreateTime',
      creatorId: 'CreatorId',
      description: 'Description',
      severity: 'Severity',
      status: 'Status',
      ticketId: 'TicketId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      createTime: 'number',
      creatorId: 'string',
      description: 'string',
      severity: GetTicketResponseBodyDataSeverity,
      status: GetTicketResponseBodyDataStatus,
      ticketId: 'string',
      title: 'string',
    };
  }

  validate() {
    if(this.severity && typeof (this.severity as any).validate === 'function') {
      (this.severity as any).validate();
    }
    if(this.status && typeof (this.status as any).validate === 'function') {
      (this.status as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTicketResponseBody extends $dara.Model {
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
   * The data returned after the call succeeds.
   */
  data?: GetTicketResponseBodyData;
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
   * The request ID.
   * 
   * @example
   * C499BB0F-630D-5BE6-B3EA-5FCD95B85503
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. A value of true indicates that the call is normal.
   * 
   * @example
   * True
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of query results, that is, the total number of my ticket records.
   * 
   * @example
   * 108
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
      data: GetTicketResponseBodyData,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
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

