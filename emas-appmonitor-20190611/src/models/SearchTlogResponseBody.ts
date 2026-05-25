// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchTlogResponseBodyModel extends $dara.Model {
  data?: any[];
  /**
   * @example
   * 10
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 100
   */
  took?: number;
  /**
   * @example
   * 10
   */
  total?: number;
  trend?: any[];
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      took: 'Took',
      total: 'Total',
      trend: 'Trend',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': 'any' },
      pageNum: 'number',
      pageSize: 'number',
      took: 'number',
      total: 'number',
      trend: { 'type': 'array', 'itemType': 'any' },
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    if(Array.isArray(this.trend)) {
      $dara.Model.validateArray(this.trend);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTlogResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  errorCode?: number;
  /**
   * @example
   * Successful
   */
  message?: string;
  model?: SearchTlogResponseBodyModel;
  /**
   * @example
   * A8313212-EB4E-4E15-A7F9-D9C8F3FE8E94
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      message: 'string',
      model: SearchTlogResponseBodyModel,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.model && typeof (this.model as any).validate === 'function') {
      (this.model as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

