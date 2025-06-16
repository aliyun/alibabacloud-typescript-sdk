// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DiagnoseVpnConnectionsResponseBodyVpnConnections } from "./DiagnoseVpnConnectionsResponseBodyVpnConnections";


export class DiagnoseVpnConnectionsResponseBody extends $dara.Model {
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
   * B8094E1E-935B-1397-96A8-4F87A5D1BF29
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
  /**
   * @remarks
   * The diagnostic information.
   */
  vpnConnections?: DiagnoseVpnConnectionsResponseBodyVpnConnections[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vpnConnections: 'VpnConnections',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      vpnConnections: { 'type': 'array', 'itemType': DiagnoseVpnConnectionsResponseBodyVpnConnections },
    };
  }

  validate() {
    if(Array.isArray(this.vpnConnections)) {
      $dara.Model.validateArray(this.vpnConnections);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

