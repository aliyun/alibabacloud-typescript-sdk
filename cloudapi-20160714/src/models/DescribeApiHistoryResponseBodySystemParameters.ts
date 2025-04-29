// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApiHistoryResponseBodySystemParametersSystemParameter } from "./DescribeApiHistoryResponseBodySystemParametersSystemParameter";


export class DescribeApiHistoryResponseBodySystemParameters extends $dara.Model {
  systemParameter?: DescribeApiHistoryResponseBodySystemParametersSystemParameter[];
  static names(): { [key: string]: string } {
    return {
      systemParameter: 'SystemParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      systemParameter: { 'type': 'array', 'itemType': DescribeApiHistoryResponseBodySystemParametersSystemParameter },
    };
  }

  validate() {
    if(Array.isArray(this.systemParameter)) {
      $dara.Model.validateArray(this.systemParameter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

