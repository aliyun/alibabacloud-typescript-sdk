// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PushResourcePlanRequestMethodList } from "./PushResourcePlanRequestMethodList";


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

