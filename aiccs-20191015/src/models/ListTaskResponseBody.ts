// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTaskResponseBodyDataRecord extends $dara.Model {
  /**
   * @example
   * 1
   */
  completeCount?: number;
  /**
   * @example
   * 1618477232000
   */
  fireTime?: string;
  /**
   * @example
   * 1618477232000
   */
  gmtCreate?: string;
  /**
   * @example
   * 123456
   */
  id?: number;
  /**
   * @example
   * 123456
   */
  robotId?: number;
  robotName?: string;
  /**
   * @example
   * RELEASE
   */
  status?: string;
  taskName?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      completeCount: 'CompleteCount',
      fireTime: 'FireTime',
      gmtCreate: 'GmtCreate',
      id: 'Id',
      robotId: 'RobotId',
      robotName: 'RobotName',
      status: 'Status',
      taskName: 'TaskName',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completeCount: 'number',
      fireTime: 'string',
      gmtCreate: 'string',
      id: 'number',
      robotId: 'number',
      robotName: 'string',
      status: 'string',
      taskName: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  record?: ListTaskResponseBodyDataRecord[];
  /**
   * @example
   * 50
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      record: 'Record',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      record: { 'type': 'array', 'itemType': ListTaskResponseBodyDataRecord },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.record)) {
      $dara.Model.validateArray(this.record);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ListTaskResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * D9CB3933-9FE3-4870-BA8E-2BEE91B69D23
   */
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
      data: ListTaskResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

