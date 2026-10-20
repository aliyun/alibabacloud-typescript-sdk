// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkPeerConnectionsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ENS node.
   * 
   * @example
   * cn-xian-unicom
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The ID of the network peer connection.
   * 
   * @example
   * pcc-5inkeimcipxk26yqtzm4q****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the network peer connection.
   * 
   * @example
   * test0
   */
  name?: string;
  /**
   * @remarks
   * The IDs of the networks involved in the connection. The query does not distinguish between the requester and accepter.
   */
  networkIds?: string[];
  /**
   * @remarks
   * The page number for the returned results. Default: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default: **10**. Valid values: **10** to **100**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      ensRegionId: 'EnsRegionId',
      instanceId: 'InstanceId',
      name: 'Name',
      networkIds: 'NetworkIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionId: 'string',
      instanceId: 'string',
      name: 'string',
      networkIds: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.networkIds)) {
      $dara.Model.validateArray(this.networkIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

