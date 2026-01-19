// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCasesResponseBodyDataList extends $dara.Model {
  abandonType?: string;
  attemptCount?: number;
  caseId?: string;
  customVariables?: string;
  expandInfo?: string;
  failureReason?: string;
  phoneNumber?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      abandonType: 'AbandonType',
      attemptCount: 'AttemptCount',
      caseId: 'CaseId',
      customVariables: 'CustomVariables',
      expandInfo: 'ExpandInfo',
      failureReason: 'FailureReason',
      phoneNumber: 'PhoneNumber',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abandonType: 'string',
      attemptCount: 'number',
      caseId: 'string',
      customVariables: 'string',
      expandInfo: 'string',
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
  pageNumber?: number;
  pageSize?: number;
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
  code?: string;
  data?: ListCasesResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListCasesResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

