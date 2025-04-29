// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApisByVpcAccessResponseBodyApiVpcAccessInfosApiVpcAccessInfo } from "./DescribeApisByVpcAccessResponseBodyApiVpcAccessInfosApiVpcAccessInfo";


export class DescribeApisByVpcAccessResponseBodyApiVpcAccessInfos extends $dara.Model {
  apiVpcAccessInfo?: DescribeApisByVpcAccessResponseBodyApiVpcAccessInfosApiVpcAccessInfo[];
  static names(): { [key: string]: string } {
    return {
      apiVpcAccessInfo: 'ApiVpcAccessInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVpcAccessInfo: { 'type': 'array', 'itemType': DescribeApisByVpcAccessResponseBodyApiVpcAccessInfosApiVpcAccessInfo },
    };
  }

  validate() {
    if(Array.isArray(this.apiVpcAccessInfo)) {
      $dara.Model.validateArray(this.apiVpcAccessInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

