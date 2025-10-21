// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetContentDetectResultResponseBodyDataDetectResultList extends $dara.Model {
  riskInfo?: string;
  /**
   * @example
   * 1
   */
  riskResult?: number;
  /**
   * @example
   * 2
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      riskInfo: 'RiskInfo',
      riskResult: 'RiskResult',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      riskInfo: 'string',
      riskResult: 'number',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContentDetectResultResponseBodyData extends $dara.Model {
  detectResultList?: GetContentDetectResultResponseBodyDataDetectResultList[];
  /**
   * @example
   * 10
   */
  processedCount?: number;
  taskId?: string;
  /**
   * @example
   * 2
   */
  taskStatus?: number;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      detectResultList: 'DetectResultList',
      processedCount: 'ProcessedCount',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detectResultList: { 'type': 'array', 'itemType': GetContentDetectResultResponseBodyDataDetectResultList },
      processedCount: 'number',
      taskId: 'string',
      taskStatus: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.detectResultList)) {
      $dara.Model.validateArray(this.detectResultList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContentDetectResultResponseBody extends $dara.Model {
  /**
   * @example
   * 00000
   */
  code?: string;
  data?: GetContentDetectResultResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * ""
   */
  message?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetContentDetectResultResponseBodyData,
      httpStatusCode: 'number',
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

