// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationMembersResponseBodyRecordsRoleList extends $dara.Model {
  /**
   * @example
   * 开发者
   */
  displayName?: string;
  /**
   * @example
   * developer
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'displayName',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
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

export class ListApplicationMembersResponseBodyRecords extends $dara.Model {
  /**
   * @example
   * http://
   */
  avatar?: string;
  /**
   * @example
   * 成语描述
   */
  description?: string;
  /**
   * @example
   * 成员1
   */
  displayName?: string;
  /**
   * @example
   * 1332695887xxxxxx
   */
  id?: string;
  roleList?: ListApplicationMembersResponseBodyRecordsRoleList[];
  /**
   * @example
   * User
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      avatar: 'avatar',
      description: 'description',
      displayName: 'displayName',
      id: 'id',
      roleList: 'roleList',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatar: 'string',
      description: 'string',
      displayName: 'string',
      id: 'string',
      roleList: { 'type': 'array', 'itemType': ListApplicationMembersResponseBodyRecordsRoleList },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.roleList)) {
      $dara.Model.validateArray(this.roleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationMembersResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  current?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 10
   */
  pages?: number;
  records?: ListApplicationMembersResponseBodyRecords[];
  /**
   * @example
   * FC93CE1A-8D7A-13A9-8306-7465DE2E5C0F
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      current: 'current',
      pageSize: 'pageSize',
      pages: 'pages',
      records: 'records',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'number',
      pageSize: 'number',
      pages: 'number',
      records: { 'type': 'array', 'itemType': ListApplicationMembersResponseBodyRecords },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

