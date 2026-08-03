// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SelectResourceResponseBodyResourceInfoList extends $dara.Model {
  expireTime?: string;
  lastExpire?: number;
  remainCount?: number;
  resourceType?: number;
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      expireTime: 'expireTime',
      lastExpire: 'lastExpire',
      remainCount: 'remainCount',
      resourceType: 'resourceType',
      unit: 'unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireTime: 'string',
      lastExpire: 'number',
      remainCount: 'number',
      resourceType: 'number',
      unit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SelectResourceResponseBody extends $dara.Model {
  aliyunUid?: string;
  requestId?: string;
  resourceInfoList?: SelectResourceResponseBodyResourceInfoList[];
  static names(): { [key: string]: string } {
    return {
      aliyunUid: 'aliyunUid',
      requestId: 'requestId',
      resourceInfoList: 'resourceInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunUid: 'string',
      requestId: 'string',
      resourceInfoList: { 'type': 'array', 'itemType': SelectResourceResponseBodyResourceInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.resourceInfoList)) {
      $dara.Model.validateArray(this.resourceInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

