// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApiHistoryResponseBodyRequestParametersRequestParameter } from "./DescribeApiHistoryResponseBodyRequestParametersRequestParameter";


export class DescribeApiHistoryResponseBodyRequestParameters extends $dara.Model {
  requestParameter?: DescribeApiHistoryResponseBodyRequestParametersRequestParameter[];
  static names(): { [key: string]: string } {
    return {
      requestParameter: 'RequestParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestParameter: { 'type': 'array', 'itemType': DescribeApiHistoryResponseBodyRequestParametersRequestParameter },
    };
  }

  validate() {
    if(Array.isArray(this.requestParameter)) {
      $dara.Model.validateArray(this.requestParameter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

