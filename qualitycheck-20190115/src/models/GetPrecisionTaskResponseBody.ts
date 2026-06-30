// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPrecisionTaskResponseBodyDataPrecisionsPrecision extends $dara.Model {
  modelId?: number;
  modelName?: string;
  precision?: number;
  status?: number;
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
   * @remarks
   * If the source is a dataset, this is the dataset ID.
   * 
   * @example
   * 1212
   */
  dataSetId?: number;
  /**
   * @remarks
   * If the source is a dataset, this is the dataset name.
   * 
   * @example
   * 数据集名称
   */
  dataSetName?: string;
  /**
   * @remarks
   * The total duration of the audio recording.
   * 
   * @example
   * 3423
   */
  duration?: number;
  /**
   * @remarks
   * The number of incorrectly transcribed words.
   * 
   * @example
   * 23
   */
  incorrectWords?: number;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * 任务名称
   */
  name?: string;
  precisions?: GetPrecisionTaskResponseBodyDataPrecisions;
  /**
   * @remarks
   * The source of the file. Possible values: 3: Dataset. 0: Call center.
   * 
   * @example
   * 3
   */
  source?: number;
  /**
   * @remarks
   * The task status. Possible values: 0: Transcribing. 1: Transcription complete.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 7C1DEF5F-2C18-4D36-99C6-8C27*****
   */
  taskId?: string;
  /**
   * @remarks
   * The total number of files in the task.
   * 
   * @example
   * 3
   */
  totalCount?: number;
  /**
   * @remarks
   * The time when the task was last updated.
   * 
   * @example
   * 2020-03-10 20:26:29
   */
  updateTime?: string;
  /**
   * @remarks
   * The total number of verified files.
   * 
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
   * @remarks
   * The result code. A value of **200** indicates that the request was successful. Other values indicate that the request failed. Use this field to determine the cause of the failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The task details.
   */
  data?: GetPrecisionTaskResponseBodyData;
  /**
   * @remarks
   * If the request fails, this field provides the error details. If the request is successful, the value is \\`successful\\`.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 106C6CA0-282D-4AF7-85F0-D2D24F4CE647
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. A value of \\`true\\` indicates success. A value of \\`false\\` or \\`null\\` indicates failure.
   * 
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

