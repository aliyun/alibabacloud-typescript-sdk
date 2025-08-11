// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryLastAccelerationEngineJobResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 2025-06-18 17:07:43
   */
  gmtCreate?: string;
  /**
   * @example
   * 2025-06-18 17:08:26
   */
  gmtModified?: string;
  /**
   * @example
   * 46e53********5464564
   */
  jobHistoryId?: string;
  /**
   * @example
   * SUCCESS
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      jobHistoryId: 'JobHistoryId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModified: 'string',
      jobHistoryId: 'string',
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

export class QueryLastAccelerationEngineJobResponseBody extends $dara.Model {
  /**
   * @example
   * 46e53*********92704c8
   */
  requestId?: string;
  result?: QueryLastAccelerationEngineJobResponseBodyResult;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: QueryLastAccelerationEngineJobResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

