// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDtsJobConfigResponseBodyParameters } from "./DescribeDtsJobConfigResponseBodyParameters";


export class DescribeDtsJobConfigResponseBody extends $dara.Model {
  parameters?: DescribeDtsJobConfigResponseBodyParameters[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      parameters: 'Parameters',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameters: { 'type': 'array', 'itemType': DescribeDtsJobConfigResponseBodyParameters },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

