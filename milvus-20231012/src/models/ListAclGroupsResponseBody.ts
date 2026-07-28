// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAclGroupsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The CIDR blocks in the group.
   */
  cidrs?: string[];
  /**
   * @remarks
   * The timestamp of the group\\"s creation.
   * 
   * @example
   * 2022-10-17T13:53:27Z
   */
  createTime?: string;
  /**
   * @remarks
   * The group name.
   * 
   * @example
   * test
   */
  groupName?: string;
  /**
   * @remarks
   * The group ID.
   * 
   * @example
   * 376774
   */
  id?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * c-xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account. This parameter is read-only.
   * 
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
   * @remarks
   * Details about the access denial. Returned only for requests denied due to insufficient RAM permissions.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: ListAclGroupsResponseBodyData[];
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
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

