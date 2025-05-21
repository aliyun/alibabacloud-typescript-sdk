// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HttpDubboTranscoderMothedMapList } from "./HttpDubboTranscoderMothedMapList";


export class HttpDubboTranscoder extends $dara.Model {
  dubboServiceGroup?: string;
  dubboServiceName?: string;
  dubboServiceVersion?: string;
  mothedMapList?: HttpDubboTranscoderMothedMapList[];
  static names(): { [key: string]: string } {
    return {
      dubboServiceGroup: 'dubboServiceGroup',
      dubboServiceName: 'dubboServiceName',
      dubboServiceVersion: 'dubboServiceVersion',
      mothedMapList: 'mothedMapList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dubboServiceGroup: 'string',
      dubboServiceName: 'string',
      dubboServiceVersion: 'string',
      mothedMapList: { 'type': 'array', 'itemType': HttpDubboTranscoderMothedMapList },
    };
  }

  validate() {
    if(Array.isArray(this.mothedMapList)) {
      $dara.Model.validateArray(this.mothedMapList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

