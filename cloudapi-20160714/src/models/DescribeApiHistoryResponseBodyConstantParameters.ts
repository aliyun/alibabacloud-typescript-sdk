// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApiHistoryResponseBodyConstantParametersConstantParameter } from "./DescribeApiHistoryResponseBodyConstantParametersConstantParameter";


export class DescribeApiHistoryResponseBodyConstantParameters extends $dara.Model {
  constantParameter?: DescribeApiHistoryResponseBodyConstantParametersConstantParameter[];
  static names(): { [key: string]: string } {
    return {
      constantParameter: 'ConstantParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constantParameter: { 'type': 'array', 'itemType': DescribeApiHistoryResponseBodyConstantParametersConstantParameter },
    };
  }

  validate() {
    if(Array.isArray(this.constantParameter)) {
      $dara.Model.validateArray(this.constantParameter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

