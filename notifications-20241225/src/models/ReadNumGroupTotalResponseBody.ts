// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReadNumGroupTotalResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The group code.
   * 
   * @example
   * test
   */
  groupCode?: string;
  /**
   * @remarks
   * The message category ID.
   * 
   * @example
   * 123
   */
  id?: number;
  /**
   * @remarks
   * The number of read messages under the category.
   * 
   * @example
   * 1
   */
  readCount?: number;
  /**
   * @remarks
   * The total number of messages under the category.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The number of unread messages under the category.
   * 
   * @example
   * 1
   */
  unReadCount?: number;
  static names(): { [key: string]: string } {
    return {
      groupCode: 'GroupCode',
      id: 'Id',
      readCount: 'ReadCount',
      totalCount: 'TotalCount',
      unReadCount: 'UnReadCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupCode: 'string',
      id: 'number',
      readCount: 'number',
      totalCount: 'number',
      unReadCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReadNumGroupTotalResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned when the call fails. For more information, see Error codes.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The execution result.
   */
  data?: ReadNumGroupTotalResponseBodyData[];
  /**
   * @remarks
   * The error message returned when the call fails.
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
   * A5F62766-1C2F-1F56-A39D-63E3D30F0633
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values: true and false. true: The call was successful. false: The call failed.
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
      data: { 'type': 'array', 'itemType': ReadNumGroupTotalResponseBodyData },
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

