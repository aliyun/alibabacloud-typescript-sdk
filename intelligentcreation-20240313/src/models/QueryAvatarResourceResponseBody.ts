// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAvatarResourceResponseBodyQueryResourceInfoList extends $dara.Model {
  resourceId?: string;
  type?: string;
  validPeriodTime?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'resourceId',
      type: 'type',
      validPeriodTime: 'validPeriodTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      type: 'string',
      validPeriodTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAvatarResourceResponseBody extends $dara.Model {
  queryResourceInfoList?: QueryAvatarResourceResponseBodyQueryResourceInfoList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      queryResourceInfoList: 'queryResourceInfoList',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryResourceInfoList: { 'type': 'array', 'itemType': QueryAvatarResourceResponseBodyQueryResourceInfoList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.queryResourceInfoList)) {
      $dara.Model.validateArray(this.queryResourceInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

