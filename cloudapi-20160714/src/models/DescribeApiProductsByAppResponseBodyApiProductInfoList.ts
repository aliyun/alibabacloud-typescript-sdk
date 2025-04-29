// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApiProductsByAppResponseBodyApiProductInfoListApiProductInfo } from "./DescribeApiProductsByAppResponseBodyApiProductInfoListApiProductInfo";


export class DescribeApiProductsByAppResponseBodyApiProductInfoList extends $dara.Model {
  apiProductInfo?: DescribeApiProductsByAppResponseBodyApiProductInfoListApiProductInfo[];
  static names(): { [key: string]: string } {
    return {
      apiProductInfo: 'ApiProductInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProductInfo: { 'type': 'array', 'itemType': DescribeApiProductsByAppResponseBodyApiProductInfoListApiProductInfo },
    };
  }

  validate() {
    if(Array.isArray(this.apiProductInfo)) {
      $dara.Model.validateArray(this.apiProductInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

