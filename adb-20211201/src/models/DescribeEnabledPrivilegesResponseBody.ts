// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEnabledPrivilegesResponseBodyData } from "./DescribeEnabledPrivilegesResponseBodyData";


export class DescribeEnabledPrivilegesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried permission level and permissions.
   */
  data?: DescribeEnabledPrivilegesResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 246F42E0-A475-15FF-96D2-8DC47FC2F289
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeEnabledPrivilegesResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

