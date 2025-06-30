// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCustomLinesResponseBodyCustomLinesCustomLine } from "./DescribeCustomLinesResponseBodyCustomLinesCustomLine";


export class DescribeCustomLinesResponseBodyCustomLines extends $dara.Model {
  customLine?: DescribeCustomLinesResponseBodyCustomLinesCustomLine[];
  static names(): { [key: string]: string } {
    return {
      customLine: 'CustomLine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customLine: { 'type': 'array', 'itemType': DescribeCustomLinesResponseBodyCustomLinesCustomLine },
    };
  }

  validate() {
    if(Array.isArray(this.customLine)) {
      $dara.Model.validateArray(this.customLine);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

