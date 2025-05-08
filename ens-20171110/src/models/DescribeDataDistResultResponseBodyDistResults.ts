// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDataDistResultResponseBodyDistResultsDistResult } from "./DescribeDataDistResultResponseBodyDistResultsDistResult";


export class DescribeDataDistResultResponseBodyDistResults extends $dara.Model {
  distResult?: DescribeDataDistResultResponseBodyDistResultsDistResult[];
  static names(): { [key: string]: string } {
    return {
      distResult: 'DistResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distResult: { 'type': 'array', 'itemType': DescribeDataDistResultResponseBodyDistResultsDistResult },
    };
  }

  validate() {
    if(Array.isArray(this.distResult)) {
      $dara.Model.validateArray(this.distResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

