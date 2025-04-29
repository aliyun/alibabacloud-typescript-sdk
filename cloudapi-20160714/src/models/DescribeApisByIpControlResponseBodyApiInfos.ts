// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApisByIpControlResponseBodyApiInfosApiInfo } from "./DescribeApisByIpControlResponseBodyApiInfosApiInfo";


export class DescribeApisByIpControlResponseBodyApiInfos extends $dara.Model {
  apiInfo?: DescribeApisByIpControlResponseBodyApiInfosApiInfo[];
  static names(): { [key: string]: string } {
    return {
      apiInfo: 'ApiInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiInfo: { 'type': 'array', 'itemType': DescribeApisByIpControlResponseBodyApiInfosApiInfo },
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

