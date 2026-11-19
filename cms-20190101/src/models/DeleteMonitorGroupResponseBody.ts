// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMonitorGroupResponseBodyGroupContactGroupsContactGroup extends $dara.Model {
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
  contactGroups?: DeleteMonitorGroupResponseBodyGroupContactGroups;
  /**
   * @remarks
   * The name of the application group.
   * 
   * @example
   * Production application group
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
   * The status code. A value of 200 indicates that the deletion was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The information about the deleted application group.
   */
  group?: DeleteMonitorGroupResponseBodyGroup;
  /**
   * @remarks
   * The error message returned when the request fails. The example indicates that the required parameter GroupId is missing. No error message is returned when the deletion is successful.
   * 
   * @example
   * GroupId is mandatory for this action.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 550e8400-e29b-41d4-a716-446655440000
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the application group was deleted. A value of true indicates success, and a value of false indicates failure.
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

