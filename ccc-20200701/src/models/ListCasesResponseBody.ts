// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCasesResponseBodyDataList extends $dara.Model {
  abandonPhase?: string;
  /**
   * @example
   * NA
   */
  abandonType?: string;
  /**
   * @example
   * 1
   */
  attemptCount?: number;
  /**
   * @example
   * 60ecb1a2-4480-4d01-bede-c5b7655bfadf
   */
  caseId?: string;
  customVariables?: string;
  failureReason?: string;
  /**
   * @example
   * 1888888****
   */
  phoneNumber?: string;
  /**
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
  list?: ListCasesResponseBodyDataList[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 100
   */
  pageSize?: number;
  /**
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
   * @example
   * OK
   */
  code?: string;
  data?: ListCasesResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  /**
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

