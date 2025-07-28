// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushResourcePlanRequestMethodListDataList extends $dara.Model {
  classZone?: string;
  convertHostType?: string;
  logicZone?: string;
  netArch?: string;
  nic?: string;
  product3?: string;
  safeZone?: string;
  scenario?: string;
  supplyAmount?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  supplyDate?: string;
  supplyType?: number;
  supplyVmAmount?: number;
  static names(): { [key: string]: string } {
    return {
      classZone: 'classZone',
      convertHostType: 'convertHostType',
      logicZone: 'logicZone',
      netArch: 'netArch',
      nic: 'nic',
      product3: 'product3',
      safeZone: 'safeZone',
      scenario: 'scenario',
      supplyAmount: 'supplyAmount',
      supplyDate: 'supplyDate',
      supplyType: 'supplyType',
      supplyVmAmount: 'supplyVmAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classZone: 'string',
      convertHostType: 'string',
      logicZone: 'string',
      netArch: 'string',
      nic: 'string',
      product3: 'string',
      safeZone: 'string',
      scenario: 'string',
      supplyAmount: 'number',
      supplyDate: 'string',
      supplyType: 'number',
      supplyVmAmount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushResourcePlanRequestMethodList extends $dara.Model {
  azone?: string;
  bufferCnt?: number;
  cluster?: string;
  comment?: string;
  convertHostCnt?: number;
  convertHostType?: string;
  dataList?: PushResourcePlanRequestMethodListDataList[];
  denamdCount?: number;
  gapCnt?: number;
  promiseDate?: string;
  region?: string;
  resourceMethodId?: number;
  roomCode?: string;
  static names(): { [key: string]: string } {
    return {
      azone: 'azone',
      bufferCnt: 'bufferCnt',
      cluster: 'cluster',
      comment: 'comment',
      convertHostCnt: 'convertHostCnt',
      convertHostType: 'convertHostType',
      dataList: 'dataList',
      denamdCount: 'denamdCount',
      gapCnt: 'gapCnt',
      promiseDate: 'promiseDate',
      region: 'region',
      resourceMethodId: 'resourceMethodId',
      roomCode: 'roomCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      azone: 'string',
      bufferCnt: 'number',
      cluster: 'string',
      comment: 'string',
      convertHostCnt: 'number',
      convertHostType: 'string',
      dataList: { 'type': 'array', 'itemType': PushResourcePlanRequestMethodListDataList },
      denamdCount: 'number',
      gapCnt: 'number',
      promiseDate: 'string',
      region: 'string',
      resourceMethodId: 'number',
      roomCode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataList)) {
      $dara.Model.validateArray(this.dataList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushResourcePlanRequest extends $dara.Model {
  bufferCnt?: number;
  demandCount?: number;
  demandId?: string;
  methodList?: PushResourcePlanRequestMethodList[];
  requestId?: string;
  requireCnt?: number;
  subDemandId?: string;
  static names(): { [key: string]: string } {
    return {
      bufferCnt: 'bufferCnt',
      demandCount: 'demandCount',
      demandId: 'demandId',
      methodList: 'methodList',
      requestId: 'requestId',
      requireCnt: 'requireCnt',
      subDemandId: 'subDemandId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bufferCnt: 'number',
      demandCount: 'number',
      demandId: 'string',
      methodList: { 'type': 'array', 'itemType': PushResourcePlanRequestMethodList },
      requestId: 'string',
      requireCnt: 'number',
      subDemandId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.methodList)) {
      $dara.Model.validateArray(this.methodList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

