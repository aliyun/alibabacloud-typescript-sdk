// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceGroupsResponseBodyServiceGroupsListListServiceGroups extends $dara.Model {
  /**
   * @remarks
   * The time when the service group was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1575357165770
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the service group.
   * 
   * @example
   * 789d9cda-74b1-****-****-05e21a0a7661
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the service group.
   * 
   * @example
   * edas-test-group
   */
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      groupId: 'GroupId',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      groupId: 'string',
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

export class ListServiceGroupsResponseBodyServiceGroupsList extends $dara.Model {
  listServiceGroups?: ListServiceGroupsResponseBodyServiceGroupsListListServiceGroups[];
  static names(): { [key: string]: string } {
    return {
      listServiceGroups: 'ListServiceGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listServiceGroups: { 'type': 'array', 'itemType': ListServiceGroupsResponseBodyServiceGroupsListListServiceGroups },
    };
  }

  validate() {
    if(Array.isArray(this.listServiceGroups)) {
      $dara.Model.validateArray(this.listServiceGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The message that is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * a5281053-08e4-47a5-b2ab-5c0323de7b5a
   */
  requestId?: string;
  /**
   * @remarks
   * The information about service groups.
   */
  serviceGroupsList?: ListServiceGroupsResponseBodyServiceGroupsList;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      serviceGroupsList: 'ServiceGroupsList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      serviceGroupsList: ListServiceGroupsResponseBodyServiceGroupsList,
    };
  }

  validate() {
    if(this.serviceGroupsList && typeof (this.serviceGroupsList as any).validate === 'function') {
      (this.serviceGroupsList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

