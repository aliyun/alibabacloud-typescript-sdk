// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAclGroupsResponseBodyData extends $dara.Model {
  cidrs?: string[];
  /**
   * @example
   * 2022-10-17T13:53:27Z
   */
  createTime?: string;
  /**
   * @example
   * test
   */
  groupName?: string;
  /**
   * @example
   * 376774
   */
  id?: number;
  /**
   * @example
   * c-xxx
   */
  instanceId?: string;
  /**
   * @example
   * 50832118
   */
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      cidrs: 'cidrs',
      createTime: 'createTime',
      groupName: 'groupName',
      id: 'id',
      instanceId: 'instanceId',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrs: { 'type': 'array', 'itemType': 'string' },
      createTime: 'string',
      groupName: 'string',
      id: 'number',
      instanceId: 'string',
      uid: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.cidrs)) {
      $dara.Model.validateArray(this.cidrs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAclGroupsResponseBody extends $dara.Model {
  /**
   * @example
   * None
   */
  accessDeniedDetail?: string;
  data?: ListAclGroupsResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 66A13C31-473A-5B3A-8974-0B07A40649CF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'accessDeniedDetail',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      data: { 'type': 'array', 'itemType': ListAclGroupsResponseBodyData },
      httpStatusCode: 'number',
      requestId: 'string',
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

