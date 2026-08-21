// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetListRecordResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The AI analysis ID.
   * 
   * @example
   * 16896fa8-37f6-4c70-bb32-67fa9817d426
   */
  analysisId?: string;
  /**
   * @remarks
   * The analysis time.
   * 
   * @example
   * 2024-12-24 12:02:05
   */
  analysisTime?: string;
  /**
   * @remarks
   * The analysis parameters of the AI job analysis.
   * 
   * @example
   * timeout=2000 ms
   */
  arguments?: string;
  /**
   * @remarks
   * The analysis failure log.
   * 
   * @example
   * 机器i-wz9dej066kii4goqpnze分析失败, 失败原因: Not get GPU trace data for \\"e59ce870-dbd4-4c44-a814-174ac6ab5bcf\\" \\"[\\"118534\\"]\\"!
   */
  failedLog?: string;
  /**
   * @remarks
   * The analysis status.
   * 
   * @example
   * Completed/Analysis Failed
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      analysisId: 'analysisId',
      analysisTime: 'analysisTime',
      arguments: 'arguments',
      failedLog: 'failedLog',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisId: 'string',
      analysisTime: 'string',
      arguments: 'string',
      failedLog: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetListRecordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetListRecordResponseBodyData[];
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * ""
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2D693121-C925-5154-8DF6-C09A8B369822
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 19
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetListRecordResponseBodyData },
      message: 'string',
      requestId: 'string',
      total: 'number',
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

