// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAllGroupsResponseBodyData extends $dara.Model {
  /**
   * @example
   * 示例值示例值示例值
   */
  gmtCreate?: string;
  /**
   * @example
   * 示例值示例值
   */
  groupName?: string;
  /**
   * @example
   * 示例值示例值
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      groupName: 'GroupName',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      groupName: 'string',
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllGroupsResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * 示例值示例值
   */
  code?: string;
  data?: ListAllGroupsResponseBodyData[];
  /**
   * @example
   * 示例值示例值
   */
  message?: string;
  /**
   * @example
   * 示例值
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: { 'type': 'array', 'itemType': ListAllGroupsResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

