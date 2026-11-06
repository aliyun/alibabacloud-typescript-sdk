// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataSetResponseBodyDataSetRecordStatistic extends $dara.Model {
  dataSetId?: string;
  newDataSetRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataSetId: 'DataSetId',
      newDataSetRecordCount: 'NewDataSetRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSetId: 'string',
      newDataSetRecordCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataSetResponseBody extends $dara.Model {
  dataSetRecordStatistic?: CreateDataSetResponseBodyDataSetRecordStatistic;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataSetRecordStatistic: 'DataSetRecordStatistic',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSetRecordStatistic: CreateDataSetResponseBodyDataSetRecordStatistic,
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

