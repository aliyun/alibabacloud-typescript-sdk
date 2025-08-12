// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMonitorGroupResponseBodyGroupContactGroupsContactGroup extends $dara.Model {
  /**
   * @remarks
   * The name of the alert group.
   * 
   * @example
   * ECS_Group
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMonitorGroupResponseBodyGroupContactGroups extends $dara.Model {
  contactGroup?: DeleteMonitorGroupResponseBodyGroupContactGroupsContactGroup[];
  static names(): { [key: string]: string } {
    return {
      contactGroup: 'ContactGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroup: { 'type': 'array', 'itemType': DeleteMonitorGroupResponseBodyGroupContactGroupsContactGroup },
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

export class DeleteMonitorGroupResponseBodyGroup extends $dara.Model {
  /**
   * @remarks
   * The alert groups that receive alert notifications for the application group.
   */
  contactGroups?: DeleteMonitorGroupResponseBodyGroupContactGroups;
  /**
   * @remarks
   * The name of the application group.
   * 
   * @example
   * ECS_test
   */
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      contactGroups: 'ContactGroups',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroups: DeleteMonitorGroupResponseBodyGroupContactGroups,
      groupName: 'string',
    };
  }

  validate() {
    if(this.contactGroups && typeof (this.contactGroups as any).validate === 'function') {
      (this.contactGroups as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMonitorGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * >  The status code 200 indicates that the call was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The deleted application group.
   */
  group?: DeleteMonitorGroupResponseBodyGroup;
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
   * CA35B3AE-4FFD-4A33-AE67-67EF68711EFA
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. The value true indicates a success. The value false indicates a failure.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      group: 'Group',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      group: DeleteMonitorGroupResponseBodyGroup,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.group && typeof (this.group as any).validate === 'function') {
      (this.group as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

