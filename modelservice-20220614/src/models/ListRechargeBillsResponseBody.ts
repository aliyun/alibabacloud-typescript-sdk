// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRechargeBillsResponseBodyInstanseInfos extends $dara.Model {
  currTimes?: number;
  gmtEndTime?: string;
  initTimes?: number;
  instanceId?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      currTimes: 'CurrTimes',
      gmtEndTime: 'GmtEndTime',
      initTimes: 'InitTimes',
      instanceId: 'InstanceId',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currTimes: 'number',
      gmtEndTime: 'string',
      initTimes: 'number',
      instanceId: 'string',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRechargeBillsResponseBody extends $dara.Model {
  instanseInfos?: ListRechargeBillsResponseBodyInstanseInfos[];
  requestId?: string;
  residueAmount?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instanseInfos: 'InstanseInfos',
      requestId: 'RequestId',
      residueAmount: 'ResidueAmount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanseInfos: { 'type': 'array', 'itemType': ListRechargeBillsResponseBodyInstanseInfos },
      requestId: 'string',
      residueAmount: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanseInfos)) {
      $dara.Model.validateArray(this.instanseInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

