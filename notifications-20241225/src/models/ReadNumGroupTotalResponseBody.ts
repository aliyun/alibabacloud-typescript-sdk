// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReadNumGroupTotalResponseBodyData extends $dara.Model {
  groupCode?: string;
  id?: number;
  readCount?: number;
  totalCount?: number;
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
   * @example
   * SUCCESS
   */
  code?: string;
  data?: ReadNumGroupTotalResponseBodyData[];
  message?: string;
  requestId?: string;
  /**
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

