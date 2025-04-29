// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApisByTrafficControlResponseBodyApiInfosApiInfo } from "./DescribeApisByTrafficControlResponseBodyApiInfosApiInfo";


export class DescribeApisByTrafficControlResponseBodyApiInfos extends $dara.Model {
  apiInfo?: DescribeApisByTrafficControlResponseBodyApiInfosApiInfo[];
  static names(): { [key: string]: string } {
    return {
      apiInfo: 'ApiInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiInfo: { 'type': 'array', 'itemType': DescribeApisByTrafficControlResponseBodyApiInfosApiInfo },
    };
  }

  validate() {
    if(Array.isArray(this.apiInfo)) {
      $dara.Model.validateArray(this.apiInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

