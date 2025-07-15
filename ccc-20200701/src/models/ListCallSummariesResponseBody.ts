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

export class ListCallSummariesResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ListCallSummariesResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  params?: string[];
  /**
   * @example
   * 932579BC-811A-503D-B322-4C2E57087CAA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      params: 'Params',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListCallSummariesResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

