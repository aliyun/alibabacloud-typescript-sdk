// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SelectResourceResponseBodyResourceInfoList } from "./SelectResourceResponseBodyResourceInfoList";


export class SelectResourceResponseBody extends $dara.Model {
  aliyunUid?: string;
  /**
   * @example
   * 0E8B1746-AE35-5C4B-A3A8-345B274AE32C
   */
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

