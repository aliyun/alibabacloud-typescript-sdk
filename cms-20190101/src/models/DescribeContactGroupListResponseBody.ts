// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeContactGroupListResponseBodyContactGroupListContactGroupContacts extends $dara.Model {
  contact?: string[];
  static names(): { [key: string]: string } {
    return {
      contact: 'Contact',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contact: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.contact)) {
      $dara.Model.validateArray(this.contact);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactGroupListResponseBodyContactGroupListContactGroup extends $dara.Model {
  /**
   * @remarks
   * The alert contacts in the alert group.
   */
  contacts?: DescribeContactGroupListResponseBodyContactGroupListContactGroupContacts;
  /**
   * @remarks
   * The time when the alert group was created. This value is a UNIX timestamp that represents the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1507070598000
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the alert group.
   */
  describe?: string;
  /**
   * @remarks
   * Indicates whether the alert group subscribes to weekly reports. Valid values:
   * 
   * *   true: The alert group subscribes to weekly reports.
   * *   false: The alert group does not subscribe to weekly reports.
   * 
   * @example
   * true
   */
  enableSubscribed?: boolean;
  /**
   * @remarks
   * Indicates whether the alert group can subscribe to weekly reports. Valid values:
   * 
   * *   true: The alert group can subscribe to weekly reports.
   * *   false: The alert group cannot subscribe to weekly reports.
   * 
   * >  The weekly report subscription feature is only available for Alibaba Cloud accounts with more than five Elastic Compute Service (ECS) instances.
   * 
   * @example
   * true
   */
  enabledWeeklyReport?: boolean;
  /**
   * @remarks
   * The name of the alert group.
   * 
   * @example
   * Contact1
   */
  name?: string;
  /**
   * @remarks
   * The time when the alert group was modified. This value is a UNIX timestamp that represents the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1589447759000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      contacts: 'Contacts',
      createTime: 'CreateTime',
      describe: 'Describe',
      enableSubscribed: 'EnableSubscribed',
      enabledWeeklyReport: 'EnabledWeeklyReport',
      name: 'Name',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contacts: DescribeContactGroupListResponseBodyContactGroupListContactGroupContacts,
      createTime: 'number',
      describe: 'string',
      enableSubscribed: 'boolean',
      enabledWeeklyReport: 'boolean',
      name: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    if(this.contacts && typeof (this.contacts as any).validate === 'function') {
      (this.contacts as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactGroupListResponseBodyContactGroupList extends $dara.Model {
  contactGroup?: DescribeContactGroupListResponseBodyContactGroupListContactGroup[];
  static names(): { [key: string]: string } {
    return {
      contactGroup: 'ContactGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroup: { 'type': 'array', 'itemType': DescribeContactGroupListResponseBodyContactGroupListContactGroup },
    };
  }

  validate() {
    if(Array.isArray(this.contactGroup)) {
      $dara.Model.validateArray(this.contactGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactGroupListResponseBodyContactGroups extends $dara.Model {
  contactGroup?: string[];
  static names(): { [key: string]: string } {
    return {
      contactGroup: 'ContactGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroup: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.contactGroup)) {
      $dara.Model.validateArray(this.contactGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactGroupListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * >  The status code 200 indicates that the call was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The information about alert groups that were queried.
   */
  contactGroupList?: DescribeContactGroupListResponseBodyContactGroupList;
  /**
   * @remarks
   * The names of alert groups.
   */
  contactGroups?: DescribeContactGroupListResponseBodyContactGroups;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * The Request is not authorization.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 916EE694-03C2-47B6-85EE-5054E3C168D3
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * 
   * *   true: The call was successful.
   * *   false: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of the returned entries.
   * 
   * @example
   * 22
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      contactGroupList: 'ContactGroupList',
      contactGroups: 'ContactGroups',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      contactGroupList: DescribeContactGroupListResponseBodyContactGroupList,
      contactGroups: DescribeContactGroupListResponseBodyContactGroups,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(this.contactGroupList && typeof (this.contactGroupList as any).validate === 'function') {
      (this.contactGroupList as any).validate();
    }
    if(this.contactGroups && typeof (this.contactGroups as any).validate === 'function') {
      (this.contactGroups as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

