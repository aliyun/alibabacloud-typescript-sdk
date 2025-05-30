// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PushResourcePlanRequestMethodListDataList } from "./PushResourcePlanRequestMethodListDataList";


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

