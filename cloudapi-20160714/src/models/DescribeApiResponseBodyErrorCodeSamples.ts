// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApiResponseBodyErrorCodeSamplesErrorCodeSample } from "./DescribeApiResponseBodyErrorCodeSamplesErrorCodeSample";


export class DescribeApiResponseBodyErrorCodeSamples extends $dara.Model {
  errorCodeSample?: DescribeApiResponseBodyErrorCodeSamplesErrorCodeSample[];
  static names(): { [key: string]: string } {
    return {
      errorCodeSample: 'ErrorCodeSample',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCodeSample: { 'type': 'array', 'itemType': DescribeApiResponseBodyErrorCodeSamplesErrorCodeSample },
    };
  }

  validate() {
    if(Array.isArray(this.errorCodeSample)) {
      $dara.Model.validateArray(this.errorCodeSample);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

