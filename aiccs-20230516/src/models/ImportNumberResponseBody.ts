// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportNumberResponseBodyModel extends $dara.Model {
  /**
   * @example
   * 54
   */
  batchId?: number;
  /**
   * @example
   * 94
   */
  code?: number;
  /**
   * @example
   * 示例值示例值
   */
  data?: string;
  /**
   * @example
   * 26
   */
  importNum?: number;
  /**
   * @example
   * 示例值示例值示例值
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      batchId: 'BatchId',
      code: 'Code',
      data: 'Data',
      importNum: 'ImportNum',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'number',
      code: 'number',
      data: 'string',
      importNum: 'number',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportNumberResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * 0
   */
  code?: number;
  /**
   * @example
   * 示例值示例值示例值
   */
  message?: string;
  model?: ImportNumberResponseBodyModel;
  /**
   * @example
   * 8EFC6D10-307B-1ECA-A8C6-7CBDF776AAD2
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
  /**
   * @example
   * 1683440860035
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
      success: 'Success',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      message: 'string',
      model: ImportNumberResponseBodyModel,
      requestId: 'string',
      success: 'string',
      timestamp: 'number',
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

