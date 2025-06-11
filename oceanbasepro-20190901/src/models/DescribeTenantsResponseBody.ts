// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTenantsResponseBodyTenants } from "./DescribeTenantsResponseBodyTenants";


export class DescribeTenantsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EE205C00-30E4-XXXX-XXXX-87E3A8A2AA0C
   */
  requestId?: string;
  /**
   * @remarks
   * The information of tenants.
   */
  tenants?: DescribeTenantsResponseBodyTenants[];
  /**
   * @remarks
   * The total number of tenants in the specified OceanBase cluster.
   * 
   * @example
   * 1
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
      tenants: { 'type': 'array', 'itemType': DescribeTenantsResponseBodyTenants },
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

