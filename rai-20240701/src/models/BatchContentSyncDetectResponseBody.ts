// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchContentSyncDetectResponseBodyDataDetectResultList extends $dara.Model {
  riskInfo?: string;
  /**
   * @example
   * 1
   */
  riskResult?: number;
  static names(): { [key: string]: string } {
    return {
      riskInfo: 'RiskInfo',
      riskResult: 'RiskResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      riskInfo: 'string',
      riskResult: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchContentSyncDetectResponseBodyData extends $dara.Model {
  detectResultList?: BatchContentSyncDetectResponseBodyDataDetectResultList[];
  static names(): { [key: string]: string } {
    return {
      detectResultList: 'DetectResultList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detectResultList: { 'type': 'array', 'itemType': BatchContentSyncDetectResponseBodyDataDetectResultList },
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

export class BatchContentSyncDetectResponseBody extends $dara.Model {
  /**
   * @example
   * 00000
   */
  code?: string;
  data?: BatchContentSyncDetectResponseBodyData;
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
      data: BatchContentSyncDetectResponseBodyData,
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

