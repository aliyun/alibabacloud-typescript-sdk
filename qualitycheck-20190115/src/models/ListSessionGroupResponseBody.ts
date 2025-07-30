// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSessionGroupResponseBodyDataDataCallerList extends $dara.Model {
  callerList?: string[];
  static names(): { [key: string]: string } {
    return {
      callerList: 'CallerList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callerList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.callerList)) {
      $dara.Model.validateArray(this.callerList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSessionGroupResponseBodyDataDataCustomerIdList extends $dara.Model {
  customerIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      customerIdList: 'CustomerIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.customerIdList)) {
      $dara.Model.validateArray(this.customerIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSessionGroupResponseBodyDataDataCustomerNameList extends $dara.Model {
  customerNameList?: string[];
  static names(): { [key: string]: string } {
    return {
      customerNameList: 'CustomerNameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerNameList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.customerNameList)) {
      $dara.Model.validateArray(this.customerNameList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSessionGroupResponseBodyDataDataCustomerServiceIdList extends $dara.Model {
  customerServiceIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      customerServiceIdList: 'CustomerServiceIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerServiceIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.customerServiceIdList)) {
      $dara.Model.validateArray(this.customerServiceIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSessionGroupResponseBodyDataDataCustomerServiceNameList extends $dara.Model {
  customerServiceNameList?: string[];
  static names(): { [key: string]: string } {
    return {
      customerServiceNameList: 'CustomerServiceNameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerServiceNameList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.customerServiceNameList)) {
      $dara.Model.validateArray(this.customerServiceNameList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSessionGroupResponseBodyDataDataReviewerList extends $dara.Model {
  reviewerList?: string[];
  static names(): { [key: string]: string } {
    return {
      reviewerList: 'ReviewerList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reviewerList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.reviewerList)) {
      $dara.Model.validateArray(this.reviewerList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSessionGroupResponseBodyDataDataSkillGroupNameList extends $dara.Model {
  skillGroupNameList?: string[];
  static names(): { [key: string]: string } {
    return {
      skillGroupNameList: 'SkillGroupNameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillGroupNameList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.skillGroupNameList)) {
      $dara.Model.validateArray(this.skillGroupNameList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSessionGroupResponseBodyDataData extends $dara.Model {
  /**
   * @example
   * 1
   */
  assignStatus?: number;
  /**
   * @example
   * 2022-09-26 10:09:14
   */
  callStartTime?: string;
  callerList?: ListSessionGroupResponseBodyDataDataCallerList;
  customerIdList?: ListSessionGroupResponseBodyDataDataCustomerIdList;
  customerNameList?: ListSessionGroupResponseBodyDataDataCustomerNameList;
  customerServiceIdList?: ListSessionGroupResponseBodyDataDataCustomerServiceIdList;
  customerServiceNameList?: ListSessionGroupResponseBodyDataDataCustomerServiceNameList;
  /**
   * @example
   * 1
   */
  hitSessionCount?: number;
  /**
   * @example
   * 4498420@a_z@93EAADF1-01D3-44BD-8AC9-F57F447EFCE8_1614*****
   */
  lastDataId?: string;
  /**
   * @example
   * 1
   */
  reviewStatus?: number;
  reviewerList?: ListSessionGroupResponseBodyDataDataReviewerList;
  /**
   * @example
   * 123
   */
  schemeTaskConfigId?: number;
  schemeTaskConfigName?: string;
  /**
   * @example
   * 100
   */
  score?: number;
  /**
   * @example
   * 1
   */
  sessionCount?: number;
  /**
   * @example
   * SessionGroupA
   */
  sessionGroupId?: string;
  /**
   * @example
   * true
   */
  sessionGroupReviewedOrComplained?: boolean;
  skillGroupNameList?: ListSessionGroupResponseBodyDataDataSkillGroupNameList;
  static names(): { [key: string]: string } {
    return {
      assignStatus: 'AssignStatus',
      callStartTime: 'CallStartTime',
      callerList: 'CallerList',
      customerIdList: 'CustomerIdList',
      customerNameList: 'CustomerNameList',
      customerServiceIdList: 'CustomerServiceIdList',
      customerServiceNameList: 'CustomerServiceNameList',
      hitSessionCount: 'HitSessionCount',
      lastDataId: 'LastDataId',
      reviewStatus: 'ReviewStatus',
      reviewerList: 'ReviewerList',
      schemeTaskConfigId: 'SchemeTaskConfigId',
      schemeTaskConfigName: 'SchemeTaskConfigName',
      score: 'Score',
      sessionCount: 'SessionCount',
      sessionGroupId: 'SessionGroupId',
      sessionGroupReviewedOrComplained: 'SessionGroupReviewedOrComplained',
      skillGroupNameList: 'SkillGroupNameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignStatus: 'number',
      callStartTime: 'string',
      callerList: ListSessionGroupResponseBodyDataDataCallerList,
      customerIdList: ListSessionGroupResponseBodyDataDataCustomerIdList,
      customerNameList: ListSessionGroupResponseBodyDataDataCustomerNameList,
      customerServiceIdList: ListSessionGroupResponseBodyDataDataCustomerServiceIdList,
      customerServiceNameList: ListSessionGroupResponseBodyDataDataCustomerServiceNameList,
      hitSessionCount: 'number',
      lastDataId: 'string',
      reviewStatus: 'number',
      reviewerList: ListSessionGroupResponseBodyDataDataReviewerList,
      schemeTaskConfigId: 'number',
      schemeTaskConfigName: 'string',
      score: 'number',
      sessionCount: 'number',
      sessionGroupId: 'string',
      sessionGroupReviewedOrComplained: 'boolean',
      skillGroupNameList: ListSessionGroupResponseBodyDataDataSkillGroupNameList,
    };
  }

  validate() {
    if(this.callerList && typeof (this.callerList as any).validate === 'function') {
      (this.callerList as any).validate();
    }
    if(this.customerIdList && typeof (this.customerIdList as any).validate === 'function') {
      (this.customerIdList as any).validate();
    }
    if(this.customerNameList && typeof (this.customerNameList as any).validate === 'function') {
      (this.customerNameList as any).validate();
    }
    if(this.customerServiceIdList && typeof (this.customerServiceIdList as any).validate === 'function') {
      (this.customerServiceIdList as any).validate();
    }
    if(this.customerServiceNameList && typeof (this.customerServiceNameList as any).validate === 'function') {
      (this.customerServiceNameList as any).validate();
    }
    if(this.reviewerList && typeof (this.reviewerList as any).validate === 'function') {
      (this.reviewerList as any).validate();
    }
    if(this.skillGroupNameList && typeof (this.skillGroupNameList as any).validate === 'function') {
      (this.skillGroupNameList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSessionGroupResponseBodyData extends $dara.Model {
  data?: ListSessionGroupResponseBodyDataData[];
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListSessionGroupResponseBodyDataData },
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

export class ListSessionGroupResponseBodyMessages extends $dara.Model {
  message?: string[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.message)) {
      $dara.Model.validateArray(this.message);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSessionGroupResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 2228
   */
  count?: number;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  data?: ListSessionGroupResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * xxx
   */
  lastDataId?: string;
  /**
   * @example
   * successful
   */
  message?: string;
  messages?: ListSessionGroupResponseBodyMessages;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * F190ADE9-619A-447D-84E3-7E241A5C428E
   */
  requestId?: string;
  resultCountId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      currentPage: 'CurrentPage',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      lastDataId: 'LastDataId',
      message: 'Message',
      messages: 'Messages',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      resultCountId: 'ResultCountId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      currentPage: 'number',
      data: ListSessionGroupResponseBodyData,
      httpStatusCode: 'number',
      lastDataId: 'string',
      message: 'string',
      messages: ListSessionGroupResponseBodyMessages,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      resultCountId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(this.messages && typeof (this.messages as any).validate === 'function') {
      (this.messages as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

