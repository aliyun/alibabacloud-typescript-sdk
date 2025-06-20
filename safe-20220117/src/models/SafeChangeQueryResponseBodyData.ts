// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SafeChangeQueryResponseBodyDataChangeTimes } from "./SafeChangeQueryResponseBodyDataChangeTimes";


export class SafeChangeQueryResponseBodyData extends $dara.Model {
  approveResultUrl?: string;
  approveStatus?: string;
  changeCancel?: string;
  changeEndTime?: number;
  changeObject?: string;
  changeOptType?: string;
  changeResult?: string;
  changeStartTime?: number;
  changeStatus?: string;
  changeSystem?: string;
  changeTimes?: SafeChangeQueryResponseBodyDataChangeTimes[];
  changeTitle?: string;
  checkResultUrl?: string;
  checkStatus?: string;
  checkholdReason?: string[];
  executorEmpId?: string;
  executorEmpName?: string;
  sourceOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      approveResultUrl: 'ApproveResultUrl',
      approveStatus: 'ApproveStatus',
      changeCancel: 'ChangeCancel',
      changeEndTime: 'ChangeEndTime',
      changeObject: 'ChangeObject',
      changeOptType: 'ChangeOptType',
      changeResult: 'ChangeResult',
      changeStartTime: 'ChangeStartTime',
      changeStatus: 'ChangeStatus',
      changeSystem: 'ChangeSystem',
      changeTimes: 'ChangeTimes',
      changeTitle: 'ChangeTitle',
      checkResultUrl: 'CheckResultUrl',
      checkStatus: 'CheckStatus',
      checkholdReason: 'CheckholdReason',
      executorEmpId: 'ExecutorEmpId',
      executorEmpName: 'ExecutorEmpName',
      sourceOrderId: 'SourceOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approveResultUrl: 'string',
      approveStatus: 'string',
      changeCancel: 'string',
      changeEndTime: 'number',
      changeObject: 'string',
      changeOptType: 'string',
      changeResult: 'string',
      changeStartTime: 'number',
      changeStatus: 'string',
      changeSystem: 'string',
      changeTimes: { 'type': 'array', 'itemType': SafeChangeQueryResponseBodyDataChangeTimes },
      changeTitle: 'string',
      checkResultUrl: 'string',
      checkStatus: 'string',
      checkholdReason: { 'type': 'array', 'itemType': 'string' },
      executorEmpId: 'string',
      executorEmpName: 'string',
      sourceOrderId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.changeTimes)) {
      $dara.Model.validateArray(this.changeTimes);
    }
    if(Array.isArray(this.checkholdReason)) {
      $dara.Model.validateArray(this.checkholdReason);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

