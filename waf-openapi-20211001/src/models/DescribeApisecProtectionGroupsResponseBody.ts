// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApisecProtectionGroupsResponseBodyData } from "./DescribeApisecProtectionGroupsResponseBodyData";


export class DescribeApisecProtectionGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The protected object groups.
   */
  data?: DescribeApisecProtectionGroupsResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D7861F61-5B61-46CE-A47C-6B19****5EB0
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of protected object groups.
   * 
   * @example
   * 8
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeApisecProtectionGroupsResponseBodyData },
      requestId: 'string',
      totalCount: 'number',
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

