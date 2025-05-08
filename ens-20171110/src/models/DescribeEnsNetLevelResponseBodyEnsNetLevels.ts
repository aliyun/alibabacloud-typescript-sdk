// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEnsNetLevelResponseBodyEnsNetLevelsEnsNetLevel } from "./DescribeEnsNetLevelResponseBodyEnsNetLevelsEnsNetLevel";


export class DescribeEnsNetLevelResponseBodyEnsNetLevels extends $dara.Model {
  ensNetLevel?: DescribeEnsNetLevelResponseBodyEnsNetLevelsEnsNetLevel[];
  static names(): { [key: string]: string } {
    return {
      ensNetLevel: 'EnsNetLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensNetLevel: { 'type': 'array', 'itemType': DescribeEnsNetLevelResponseBodyEnsNetLevelsEnsNetLevel },
    };
  }

  validate() {
    if(Array.isArray(this.ensNetLevel)) {
      $dara.Model.validateArray(this.ensNetLevel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

