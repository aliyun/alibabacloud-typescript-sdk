// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataSetRecordResponseBodyDataSetRecordStatistic extends $dara.Model {
  /**
   * @example
   * 12
   */
  newDataSetRecordCount?: number;
  /**
   * @example
   * 4
   */
  updateDataSetRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      newDataSetRecordCount: 'NewDataSetRecordCount',
      updateDataSetRecordCount: 'UpdateDataSetRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newDataSetRecordCount: 'number',
      updateDataSetRecordCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDataSetRecordResponseBody extends $dara.Model {
  dataSetRecordStatistic?: UpdateDataSetRecordResponseBodyDataSetRecordStatistic;
  /**
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataSetRecordStatistic: 'DataSetRecordStatistic',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSetRecordStatistic: UpdateDataSetRecordResponseBodyDataSetRecordStatistic,
      requestId: 'string',
    };
  }

  validate() {
    if(this.dataSetRecordStatistic && typeof (this.dataSetRecordStatistic as any).validate === 'function') {
      (this.dataSetRecordStatistic as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

