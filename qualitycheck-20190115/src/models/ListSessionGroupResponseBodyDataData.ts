// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSessionGroupResponseBodyDataDataCallerList } from "./ListSessionGroupResponseBodyDataDataCallerList";
import { ListSessionGroupResponseBodyDataDataCustomerIdList } from "./ListSessionGroupResponseBodyDataDataCustomerIdList";
import { ListSessionGroupResponseBodyDataDataCustomerNameList } from "./ListSessionGroupResponseBodyDataDataCustomerNameList";
import { ListSessionGroupResponseBodyDataDataCustomerServiceIdList } from "./ListSessionGroupResponseBodyDataDataCustomerServiceIdList";
import { ListSessionGroupResponseBodyDataDataCustomerServiceNameList } from "./ListSessionGroupResponseBodyDataDataCustomerServiceNameList";
import { ListSessionGroupResponseBodyDataDataReviewerList } from "./ListSessionGroupResponseBodyDataDataReviewerList";
import { ListSessionGroupResponseBodyDataDataSkillGroupNameList } from "./ListSessionGroupResponseBodyDataDataSkillGroupNameList";


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

