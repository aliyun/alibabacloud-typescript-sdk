// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryBlockEventRequestRegionReqs } from "./QueryBlockEventRequestRegionReqs";


export class QueryBlockEventRequest extends $dara.Model {
  authKey?: string;
  authSign?: string;
  bgSystemName?: string;
  blockHarm?: string;
  category?: string;
  deptNo?: string;
  endTime?: number;
  limit?: number;
  needRule?: boolean;
  page?: number;
  productCodes?: string[];
  regionReqs?: QueryBlockEventRequestRegionReqs[];
  reqTimestamp?: number;
  scope?: string[];
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      authKey: 'AuthKey',
      authSign: 'AuthSign',
      bgSystemName: 'BgSystemName',
      blockHarm: 'BlockHarm',
      category: 'Category',
      deptNo: 'DeptNo',
      endTime: 'EndTime',
      limit: 'Limit',
      needRule: 'NeedRule',
      page: 'Page',
      productCodes: 'ProductCodes',
      regionReqs: 'RegionReqs',
      reqTimestamp: 'ReqTimestamp',
      scope: 'Scope',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authKey: 'string',
      authSign: 'string',
      bgSystemName: 'string',
      blockHarm: 'string',
      category: 'string',
      deptNo: 'string',
      endTime: 'number',
      limit: 'number',
      needRule: 'boolean',
      page: 'number',
      productCodes: { 'type': 'array', 'itemType': 'string' },
      regionReqs: { 'type': 'array', 'itemType': QueryBlockEventRequestRegionReqs },
      reqTimestamp: 'number',
      scope: { 'type': 'array', 'itemType': 'string' },
      startTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.productCodes)) {
      $dara.Model.validateArray(this.productCodes);
    }
    if(Array.isArray(this.regionReqs)) {
      $dara.Model.validateArray(this.regionReqs);
    }
    if(Array.isArray(this.scope)) {
      $dara.Model.validateArray(this.scope);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

