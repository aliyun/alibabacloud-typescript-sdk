// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGroupsResponseBodyGroupsGroup extends $dara.Model {
  comments?: string;
  createDate?: string;
  displayName?: string;
  groupId?: string;
  groupName?: string;
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      comments: 'Comments',
      createDate: 'CreateDate',
      displayName: 'DisplayName',
      groupId: 'GroupId',
      groupName: 'GroupName',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comments: 'string',
      createDate: 'string',
      displayName: 'string',
      groupId: 'string',
      groupName: 'string',
      updateDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsResponseBodyGroups extends $dara.Model {
  group?: ListGroupsResponseBodyGroupsGroup[];
  static names(): { [key: string]: string } {
    return {
      group: 'Group',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: { 'type': 'array', 'itemType': ListGroupsResponseBodyGroupsGroup },
    };
  }

  validate() {
    if(Array.isArray(this.group)) {
      $dara.Model.validateArray(this.group);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsResponseBody extends $dara.Model {
  groups?: ListGroupsResponseBodyGroups;
  /**
   * @remarks
   * Indicates whether the response is truncated. Valid values:
   * 
   * - true
   * 
   * - false
   * 
   * @example
   * true
   */
  isTruncated?: boolean;
  /**
   * @remarks
   * The `marker`. This parameter is returned only if the value of `IsTruncated` is `true`. If the parameter is returned, you can call this operation again and set this parameter to obtain the truncated part.
   * 
   * @example
   * EXAMPLE
   */
  marker?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 065527AA-2F2E-AD7C-7484-F2626CFE4934
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      groups: 'Groups',
      isTruncated: 'IsTruncated',
      marker: 'Marker',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groups: ListGroupsResponseBodyGroups,
      isTruncated: 'boolean',
      marker: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.groups && typeof (this.groups as any).validate === 'function') {
      (this.groups as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

