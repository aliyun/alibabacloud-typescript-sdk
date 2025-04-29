// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApiResponseBodyServiceParametersServiceParameter } from "./DescribeApiResponseBodyServiceParametersServiceParameter";


export class DescribeApiResponseBodyServiceParameters extends $dara.Model {
  serviceParameter?: DescribeApiResponseBodyServiceParametersServiceParameter[];
  static names(): { [key: string]: string } {
    return {
      serviceParameter: 'ServiceParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceParameter: { 'type': 'array', 'itemType': DescribeApiResponseBodyServiceParametersServiceParameter },
    };
  }

  validate() {
    if(Array.isArray(this.serviceParameter)) {
      $dara.Model.validateArray(this.serviceParameter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

