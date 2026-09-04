// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReadCategoryGroupListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The category group code.
   * 
   * @example
   * prod_msg
   */
  groupCode?: string;
  /**
   * @remarks
   * The group name.
   * 
   * @example
   * 产品消息
   */
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      groupCode: 'GroupCode',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupCode: 'string',
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

export class ReadCategoryGroupListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned by the system. For more information about error codes, see Error codes.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The execution result.
   */
  data?: ReadCategoryGroupListResponseBodyData[];
  /**
   * @remarks
   * The message returned when the call fails.
   * 
   * @example
   * 成功
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * /
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. true: The call was successful. false: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ReadCategoryGroupListResponseBodyData },
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

