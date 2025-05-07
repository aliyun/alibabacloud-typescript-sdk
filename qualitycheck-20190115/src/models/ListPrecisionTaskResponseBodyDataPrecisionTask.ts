// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPrecisionTaskResponseBodyDataPrecisionTaskPrecisions } from "./ListPrecisionTaskResponseBodyDataPrecisionTaskPrecisions";


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

