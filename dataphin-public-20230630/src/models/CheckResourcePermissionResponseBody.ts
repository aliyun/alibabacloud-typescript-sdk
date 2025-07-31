// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckResourcePermissionResponseBodyResourcePermissionList extends $dara.Model {
  /**
   * @example
   * true
   */
  hasPermission?: boolean;
  /**
   * @example
   * hadoop.300000806.data_distill.behavior_gameinfor_01
   */
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      hasPermission: 'HasPermission',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasPermission: 'boolean',
      resourceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckResourcePermissionResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  resourcePermissionList?: CheckResourcePermissionResponseBodyResourcePermissionList[];
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      resourcePermissionList: 'ResourcePermissionList',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      resourcePermissionList: { 'type': 'array', 'itemType': CheckResourcePermissionResponseBodyResourcePermissionList },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.resourcePermissionList)) {
      $dara.Model.validateArray(this.resourcePermissionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

