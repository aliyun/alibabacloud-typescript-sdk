// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCasesResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * Phase at which the call was abandoned.
   * 
   * - IVR (IVR interaction phase)
   * 
   * - Queuing (queuing phase)
   * 
   * - Ringing (agent ringing phase)
   * 
   * @example
   * Ringing
   */
  abandonPhase?: string;
  /**
   * @remarks
   * The type of call abandonment, that is, the reason why the call was not successfully connected.
   * 
   * @example
   * NA
   */
  abandonType?: string;
  /**
   * @remarks
   * Number of attempts, which is the total number of calls made to this contact.
   * 
   * @example
   * 1
   */
  attemptCount?: number;
  /**
   * @remarks
   * System-generated contact ID. Customers do not need to concern themselves with this.
   * 
   * @example
   * 60ecb1a2-4480-4d01-bede-c5b7655bfadf
   */
  caseId?: string;
  /**
   * @remarks
   * Custom variables defined by the customer, formatted as a JSON object. The object can contain up to 10 properties, each with a name and value defined by the customer. These can be configured when creating a predictive outbound dialing activity.
   * 
   * @example
   * {"name":"yy","客戶标签":"tag-yy"}
   */
  customVariables?: string;
  /**
   * @remarks
   * Reason for outbound call failure.
   * 
   * @example
   * 无
   */
  failureReason?: string;
  /**
   * @remarks
   * Phone number.
   * 
   * @example
   * 1888888****
   */
  phoneNumber?: string;
  /**
   * @remarks
   * Status.
   * 
   * @example
   * Connected
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      abandonPhase: 'AbandonPhase',
      abandonType: 'AbandonType',
      attemptCount: 'AttemptCount',
      caseId: 'CaseId',
      customVariables: 'CustomVariables',
      failureReason: 'FailureReason',
      phoneNumber: 'PhoneNumber',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abandonPhase: 'string',
      abandonType: 'string',
      attemptCount: 'number',
      caseId: 'string',
      customVariables: 'string',
      failureReason: 'string',
      phoneNumber: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCasesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * List of contact list execution details.
   */
  list?: ListCasesResponseBodyDataList[];
  /**
   * @remarks
   * Page number, ranging from 1 to 100.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size, ranging from 1 to 100.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * Total count.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListCasesResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCasesResponseBody extends $dara.Model {
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
  data?: ListCasesResponseBodyData;
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
   * 7CC6523B-0E51-1B62-8DA5-6A9831CAE316
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
      data: ListCasesResponseBodyData,
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

