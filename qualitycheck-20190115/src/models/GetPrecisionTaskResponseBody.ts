// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPrecisionTaskResponseBodyDataPrecisionsPrecision extends $dara.Model {
  /**
   * @example
   * 2311
   */
  modelId?: number;
  modelName?: string;
  /**
   * @example
   * 0.98
   */
  precision?: number;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 593A04C0-E6E9-4CDC-8C99-B120C******
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      modelId: 'ModelId',
      modelName: 'ModelName',
      precision: 'Precision',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelId: 'number',
      modelName: 'string',
      precision: 'number',
      status: 'number',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPrecisionTaskResponseBodyDataPrecisions extends $dara.Model {
  precision?: GetPrecisionTaskResponseBodyDataPrecisionsPrecision[];
  static names(): { [key: string]: string } {
    return {
      precision: 'Precision',
    };
  }

  static types(): { [key: string]: any } {
    return {
      precision: { 'type': 'array', 'itemType': GetPrecisionTaskResponseBodyDataPrecisionsPrecision },
    };
  }

  validate() {
    if(Array.isArray(this.precision)) {
      $dara.Model.validateArray(this.precision);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPrecisionTaskResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1212
   */
  dataSetId?: number;
  dataSetName?: string;
  /**
   * @example
   * 3423
   */
  duration?: number;
  /**
   * @example
   * 23
   */
  incorrectWords?: number;
  name?: string;
  precisions?: GetPrecisionTaskResponseBodyDataPrecisions;
  /**
   * @example
   * 3
   */
  source?: number;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 7C1DEF5F-2C18-4D36-99C6-8C27*****
   */
  taskId?: string;
  /**
   * @example
   * 3
   */
  totalCount?: number;
  /**
   * @example
   * 2020-03-10 20:26:29
   */
  updateTime?: string;
  /**
   * @example
   * 2
   */
  verifiedCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataSetId: 'DataSetId',
      dataSetName: 'DataSetName',
      duration: 'Duration',
      incorrectWords: 'IncorrectWords',
      name: 'Name',
      precisions: 'Precisions',
      source: 'Source',
      status: 'Status',
      taskId: 'TaskId',
      totalCount: 'TotalCount',
      updateTime: 'UpdateTime',
      verifiedCount: 'VerifiedCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSetId: 'number',
      dataSetName: 'string',
      duration: 'number',
      incorrectWords: 'number',
      name: 'string',
      precisions: GetPrecisionTaskResponseBodyDataPrecisions,
      source: 'number',
      status: 'number',
      taskId: 'string',
      totalCount: 'number',
      updateTime: 'string',
      verifiedCount: 'number',
    };
  }

  validate() {
    if(this.precisions && typeof (this.precisions as any).validate === 'function') {
      (this.precisions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPrecisionTaskResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetPrecisionTaskResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 106C6CA0-282D-4AF7-85F0-D2D24F4CE647
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
      data: GetPrecisionTaskResponseBodyData,
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

