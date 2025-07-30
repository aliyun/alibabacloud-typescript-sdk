// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrecisionTaskResponseBodyDataPrecisionTaskPrecisionsPrecision extends $dara.Model {
  /**
   * @example
   * 2020-03-10 20:26:29
   */
  createTime?: string;
  /**
   * @example
   * 2321
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
   * 7C1DEF5F-2C18-4D36-99C6-8C276F781796
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      modelId: 'ModelId',
      modelName: 'ModelName',
      precision: 'Precision',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
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

export class ListPrecisionTaskResponseBodyDataPrecisionTaskPrecisions extends $dara.Model {
  precision?: ListPrecisionTaskResponseBodyDataPrecisionTaskPrecisionsPrecision[];
  static names(): { [key: string]: string } {
    return {
      precision: 'Precision',
    };
  }

  static types(): { [key: string]: any } {
    return {
      precision: { 'type': 'array', 'itemType': ListPrecisionTaskResponseBodyDataPrecisionTaskPrecisionsPrecision },
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

export class ListPrecisionTaskResponseBodyDataPrecisionTask extends $dara.Model {
  /**
   * @example
   * 2020-03-10 20:26:29
   */
  createTime?: string;
  /**
   * @example
   * 1212
   */
  dataSetId?: number;
  dataSetName?: string;
  /**
   * @example
   * 331311
   */
  duration?: number;
  /**
   * @example
   * 32
   */
  incorrectWords?: number;
  name?: string;
  precisions?: ListPrecisionTaskResponseBodyDataPrecisionTaskPrecisions;
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
   * 7C1DEF5F-2C18-4D36-99C6-8C276F781796
   */
  taskId?: string;
  /**
   * @example
   * 21
   */
  totalCount?: number;
  /**
   * @example
   * 2020-03-10 20:26:29
   */
  updateTime?: string;
  /**
   * @example
   * 3
   */
  verifiedCount?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
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
      createTime: 'string',
      dataSetId: 'number',
      dataSetName: 'string',
      duration: 'number',
      incorrectWords: 'number',
      name: 'string',
      precisions: ListPrecisionTaskResponseBodyDataPrecisionTaskPrecisions,
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

export class ListPrecisionTaskResponseBodyData extends $dara.Model {
  precisionTask?: ListPrecisionTaskResponseBodyDataPrecisionTask[];
  static names(): { [key: string]: string } {
    return {
      precisionTask: 'PrecisionTask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      precisionTask: { 'type': 'array', 'itemType': ListPrecisionTaskResponseBodyDataPrecisionTask },
    };
  }

  validate() {
    if(Array.isArray(this.precisionTask)) {
      $dara.Model.validateArray(this.precisionTask);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrecisionTaskResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 22
   */
  count?: number;
  data?: ListPrecisionTaskResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
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
      count: 'Count',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      data: ListPrecisionTaskResponseBodyData,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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

