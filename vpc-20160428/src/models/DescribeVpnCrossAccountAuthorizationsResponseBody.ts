// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVpnCrossAccountAuthorizationsResponseBodyCrossAccountAuthorizations } from "./DescribeVpnCrossAccountAuthorizationsResponseBodyCrossAccountAuthorizations";


export class DescribeVpnCrossAccountAuthorizationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cross-account authorization information about the IPsec-VPN connection.
   */
  crossAccountAuthorizations?: DescribeVpnCrossAccountAuthorizationsResponseBodyCrossAccountAuthorizations[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DB04E39A-6F0C-36AC-BCA0-B6D371B90062
   */
  requestId?: string;
  /**
   * @remarks
   * The number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      crossAccountAuthorizations: 'CrossAccountAuthorizations',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crossAccountAuthorizations: { 'type': 'array', 'itemType': DescribeVpnCrossAccountAuthorizationsResponseBodyCrossAccountAuthorizations },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.crossAccountAuthorizations)) {
      $dara.Model.validateArray(this.crossAccountAuthorizations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

