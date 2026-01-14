// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModelUsage } from "./ModelUsage";


export class GetEssayCorrectionTaskResponseBodyDataResults extends $dara.Model {
  /**
   * @remarks
   * xxx
   * 
   * @example
   * 1
   */
  customId?: string;
  result?: string;
  /**
   * @example
   * 58
   */
  score?: number;
  usage?: ModelUsage;
  static names(): { [key: string]: string } {
    return {
      customId: 'customId',
      result: 'result',
      score: 'score',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customId: 'string',
      result: 'string',
      score: 'number',
      usage: ModelUsage,
    };
  }

  validate() {
    if(this.usage && typeof (this.usage as any).validate === 'function') {
      (this.usage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEssayCorrectionTaskResponseBodyData extends $dara.Model {
  errorMessage?: string;
  results?: GetEssayCorrectionTaskResponseBodyDataResults[];
  /**
   * @example
   * PENDING
   */
  status?: string;
  totalUsage?: ModelUsage;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'errorMessage',
      results: 'results',
      status: 'status',
      totalUsage: 'totalUsage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      results: { 'type': 'array', 'itemType': GetEssayCorrectionTaskResponseBodyDataResults },
      status: 'string',
      totalUsage: ModelUsage,
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    if(this.totalUsage && typeof (this.totalUsage as any).validate === 'function') {
      (this.totalUsage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEssayCorrectionTaskResponseBody extends $dara.Model {
  /**
   * @example
   * successful
   */
  code?: string;
  data?: GetEssayCorrectionTaskResponseBodyData;
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
   * @remarks
   * Id of the request
   * 
   * @example
   * 117F5ABE-CF02-5502-9A3F-E56BC9081A64
   */
  requestId?: string;
  /**
   * @example
   * false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetEssayCorrectionTaskResponseBodyData,
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

