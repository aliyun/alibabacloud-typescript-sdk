// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApiHistoryResponseBodyCustomSystemParametersCustomSystemParameter } from "./DescribeApiHistoryResponseBodyCustomSystemParametersCustomSystemParameter";


export class DescribeApiHistoryResponseBodyCustomSystemParameters extends $dara.Model {
  customSystemParameter?: DescribeApiHistoryResponseBodyCustomSystemParametersCustomSystemParameter[];
  static names(): { [key: string]: string } {
    return {
      customSystemParameter: 'CustomSystemParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customSystemParameter: { 'type': 'array', 'itemType': DescribeApiHistoryResponseBodyCustomSystemParametersCustomSystemParameter },
    };
  }

  validate() {
    if(Array.isArray(this.customSystemParameter)) {
      $dara.Model.validateArray(this.customSystemParameter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

