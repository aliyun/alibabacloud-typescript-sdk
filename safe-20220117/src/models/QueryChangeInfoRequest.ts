// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryChangeInfoRequestLevelTree } from "./QueryChangeInfoRequestLevelTree";


export class QueryChangeInfoRequest extends $dara.Model {
  authKey?: string;
  authSign?: string;
  az?: string[];
  bgVid?: string;
  buId?: string;
  changeSystem?: string;
  endTime?: number;
  keyword?: string;
  levelTree?: QueryChangeInfoRequestLevelTree;
  limit?: number;
  page?: number;
  product?: string[];
  region?: string[];
  reqTimestamp?: number;
  source?: string;
  sourceOrderId?: string;
  startTime?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      authKey: 'AuthKey',
      authSign: 'AuthSign',
      az: 'Az',
      bgVid: 'BgVid',
      buId: 'BuId',
      changeSystem: 'ChangeSystem',
      endTime: 'EndTime',
      keyword: 'Keyword',
      levelTree: 'LevelTree',
      limit: 'Limit',
      page: 'Page',
      product: 'Product',
      region: 'Region',
      reqTimestamp: 'ReqTimestamp',
      source: 'Source',
      sourceOrderId: 'SourceOrderId',
      startTime: 'StartTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authKey: 'string',
      authSign: 'string',
      az: { 'type': 'array', 'itemType': 'string' },
      bgVid: 'string',
      buId: 'string',
      changeSystem: 'string',
      endTime: 'number',
      keyword: 'string',
      levelTree: QueryChangeInfoRequestLevelTree,
      limit: 'number',
      page: 'number',
      product: { 'type': 'array', 'itemType': 'string' },
      region: { 'type': 'array', 'itemType': 'string' },
      reqTimestamp: 'number',
      source: 'string',
      sourceOrderId: 'string',
      startTime: 'number',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.az)) {
      $dara.Model.validateArray(this.az);
    }
    if(this.levelTree && typeof (this.levelTree as any).validate === 'function') {
      (this.levelTree as any).validate();
    }
    if(Array.isArray(this.product)) {
      $dara.Model.validateArray(this.product);
    }
    if(Array.isArray(this.region)) {
      $dara.Model.validateArray(this.region);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

