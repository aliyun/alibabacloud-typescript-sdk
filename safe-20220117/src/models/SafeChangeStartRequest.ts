// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SafeChangeStartRequest extends $dara.Model {
  authKey?: string;
  authSign?: string;
  changeEndTime?: number;
  changeObject?: string;
  changeOptType?: string;
  changeStartTime?: number;
  changeTitle?: string;
  creatorEmpId?: string;
  curBatchNo?: number;
  executorEmpId?: string;
  reqTimestamp?: number;
  sourceOrderId?: string;
  totalBatchNo?: number;
  static names(): { [key: string]: string } {
    return {
      authKey: 'AuthKey',
      authSign: 'AuthSign',
      changeEndTime: 'ChangeEndTime',
      changeObject: 'ChangeObject',
      changeOptType: 'ChangeOptType',
      changeStartTime: 'ChangeStartTime',
      changeTitle: 'ChangeTitle',
      creatorEmpId: 'CreatorEmpId',
      curBatchNo: 'CurBatchNo',
      executorEmpId: 'ExecutorEmpId',
      reqTimestamp: 'ReqTimestamp',
      sourceOrderId: 'SourceOrderId',
      totalBatchNo: 'TotalBatchNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authKey: 'string',
      authSign: 'string',
      changeEndTime: 'number',
      changeObject: 'string',
      changeOptType: 'string',
      changeStartTime: 'number',
      changeTitle: 'string',
      creatorEmpId: 'string',
      curBatchNo: 'number',
      executorEmpId: 'string',
      reqTimestamp: 'number',
      sourceOrderId: 'string',
      totalBatchNo: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

