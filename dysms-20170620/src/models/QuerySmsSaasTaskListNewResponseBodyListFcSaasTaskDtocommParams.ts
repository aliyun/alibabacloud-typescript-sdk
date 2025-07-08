// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySmsSaasTaskListNewResponseBodyListFcSaasTaskDTOCommParams extends $dara.Model {
  aliyunUid?: number;
  custId?: number;
  cycleNum?: number;
  partnerId?: number;
  static names(): { [key: string]: string } {
    return {
      aliyunUid: 'AliyunUid',
      custId: 'CustId',
      cycleNum: 'CycleNum',
      partnerId: 'PartnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunUid: 'number',
      custId: 'number',
      cycleNum: 'number',
      partnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

