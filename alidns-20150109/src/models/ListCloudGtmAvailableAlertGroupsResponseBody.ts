// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudGtmAvailableAlertGroupsResponseBodyAlertGroupsAlertGroup extends $dara.Model {
  /**
   * @remarks
   * The name of the alert contact group.
   * 
   * @example
   * [\\"Default\\"]
   */
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudGtmAvailableAlertGroupsResponseBodyAlertGroups extends $dara.Model {
  alertGroup?: ListCloudGtmAvailableAlertGroupsResponseBodyAlertGroupsAlertGroup[];
  static names(): { [key: string]: string } {
    return {
      alertGroup: 'AlertGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertGroup: { 'type': 'array', 'itemType': ListCloudGtmAvailableAlertGroupsResponseBodyAlertGroupsAlertGroup },
    };
  }

  validate() {
    if(Array.isArray(this.alertGroup)) {
      $dara.Model.validateArray(this.alertGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudGtmAvailableAlertGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The alert contact groups.
   */
  alertGroups?: ListCloudGtmAvailableAlertGroupsResponseBodyAlertGroups;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 536E9CAD-DB30-4647-AC87-AA5CC38C5382
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      alertGroups: 'AlertGroups',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertGroups: ListCloudGtmAvailableAlertGroupsResponseBodyAlertGroups,
      requestId: 'string',
    };
  }

  validate() {
    if(this.alertGroups && typeof (this.alertGroups as any).validate === 'function') {
      (this.alertGroups as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

