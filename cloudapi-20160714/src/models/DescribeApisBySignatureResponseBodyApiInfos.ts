// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApisBySignatureResponseBodyApiInfosApiInfo } from "./DescribeApisBySignatureResponseBodyApiInfosApiInfo";


export class DescribeApisBySignatureResponseBodyApiInfos extends $dara.Model {
  apiInfo?: DescribeApisBySignatureResponseBodyApiInfosApiInfo[];
  static names(): { [key: string]: string } {
    return {
      apiInfo: 'ApiInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiInfo: { 'type': 'array', 'itemType': DescribeApisBySignatureResponseBodyApiInfosApiInfo },
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

