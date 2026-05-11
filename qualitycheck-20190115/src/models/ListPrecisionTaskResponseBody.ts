// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrecisionTaskResponseBodyDataPrecisionTaskPrecisionsPrecision extends $dara.Model {
  createTime?: string;
  modelId?: number;
  modelName?: string;
  precision?: number;
  status?: number;
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
  createTime?: string;
  dataSetId?: number;
  dataSetName?: string;
  duration?: number;
  incorrectWords?: number;
  name?: string;
  precisions?: ListPrecisionTaskResponseBodyDataPrecisionTaskPrecisions;
  source?: number;
  status?: number;
  taskId?: string;
  totalCount?: number;
  updateTime?: string;
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

