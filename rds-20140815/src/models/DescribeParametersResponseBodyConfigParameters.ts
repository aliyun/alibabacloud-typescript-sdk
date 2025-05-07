// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeParametersResponseBodyConfigParametersDBInstanceParameter } from "./DescribeParametersResponseBodyConfigParametersDbinstanceParameter";


export class DescribeParametersResponseBodyConfigParameters extends $dara.Model {
  DBInstanceParameter?: DescribeParametersResponseBodyConfigParametersDBInstanceParameter[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceParameter: 'DBInstanceParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceParameter: { 'type': 'array', 'itemType': DescribeParametersResponseBodyConfigParametersDBInstanceParameter },
    };
  }

  validate() {
    if(Array.isArray(this.DBInstanceParameter)) {
      $dara.Model.validateArray(this.DBInstanceParameter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

