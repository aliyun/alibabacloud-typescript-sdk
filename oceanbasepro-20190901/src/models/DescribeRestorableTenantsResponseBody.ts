// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRestorableTenantsResponseBodyTenants } from "./DescribeRestorableTenantsResponseBodyTenants";


export class DescribeRestorableTenantsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EE205C00-30E4-****-****-87E3A8A2AA0C
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the tenants.
   */
  tenants?: DescribeRestorableTenantsResponseBodyTenants[];
  /**
   * @remarks
   * The total number.
   * 
   * @example
   * 6
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tenants: 'Tenants',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tenants: { 'type': 'array', 'itemType': DescribeRestorableTenantsResponseBodyTenants },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tenants)) {
      $dara.Model.validateArray(this.tenants);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

