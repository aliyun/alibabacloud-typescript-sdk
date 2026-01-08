// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAllGroupsResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1789000
   */
  gmtCreate?: string;
  /**
   * @example
   * aaa
   */
  groupName?: string;
  /**
   * @example
   * 5435
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
  /**
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ListAllGroupsResponseBodyData[];
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 608F9CCA-B5EB-3D72-XXXXB25D6D75BDEC
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

