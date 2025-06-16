// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVpnAttachmentsResponseBodyVpnAttachments } from "./DescribeVpnAttachmentsResponseBodyVpnAttachments";


export class DescribeVpnAttachmentsResponseBody extends $dara.Model {
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
   * 9F0725BB-186A-3564-91C3-AAE48042F853
   */
  requestId?: string;
  /**
   * @remarks
   * The number of returned entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of IPsec-VPN connections associated with the transit router.
   */
  vpnAttachments?: DescribeVpnAttachmentsResponseBodyVpnAttachments[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vpnAttachments: 'VpnAttachments',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      vpnAttachments: { 'type': 'array', 'itemType': DescribeVpnAttachmentsResponseBodyVpnAttachments },
    };
  }

  validate() {
    if(Array.isArray(this.vpnAttachments)) {
      $dara.Model.validateArray(this.vpnAttachments);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

