// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApisByBackendResponseBodyApiInfoListApiInfo } from "./DescribeApisByBackendResponseBodyApiInfoListApiInfo";


export class DescribeApisByBackendResponseBodyApiInfoList extends $dara.Model {
  apiInfo?: DescribeApisByBackendResponseBodyApiInfoListApiInfo[];
  static names(): { [key: string]: string } {
    return {
      apiInfo: 'ApiInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiInfo: { 'type': 'array', 'itemType': DescribeApisByBackendResponseBodyApiInfoListApiInfo },
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

