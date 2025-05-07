// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAvailableClassesResponseBodyDBInstanceClasses } from "./DescribeAvailableClassesResponseBodyDbinstanceClasses";


export class DescribeAvailableClassesResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of the instance types available for the instance.
   */
  DBInstanceClasses?: DescribeAvailableClassesResponseBodyDBInstanceClasses[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7E4448A6-9FE6-4474-A0C1-AA7CFC772CAC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceClasses: 'DBInstanceClasses',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceClasses: { 'type': 'array', 'itemType': DescribeAvailableClassesResponseBodyDBInstanceClasses },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.DBInstanceClasses)) {
      $dara.Model.validateArray(this.DBInstanceClasses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

