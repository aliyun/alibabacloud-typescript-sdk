// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeModifyParameterLogResponseBodyItemsParameterChangeLog } from "./DescribeModifyParameterLogResponseBodyItemsParameterChangeLog";


export class DescribeModifyParameterLogResponseBodyItems extends $dara.Model {
  parameterChangeLog?: DescribeModifyParameterLogResponseBodyItemsParameterChangeLog[];
  static names(): { [key: string]: string } {
    return {
      parameterChangeLog: 'ParameterChangeLog',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterChangeLog: { 'type': 'array', 'itemType': DescribeModifyParameterLogResponseBodyItemsParameterChangeLog },
    };
  }

  validate() {
    if(Array.isArray(this.parameterChangeLog)) {
      $dara.Model.validateArray(this.parameterChangeLog);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

