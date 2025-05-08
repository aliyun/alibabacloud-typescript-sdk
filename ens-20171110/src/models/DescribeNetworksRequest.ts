// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworksRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the edge node.
   * 
   * @example
   * cn-beijing-telecom
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The IDs of edge nodes. You can specify 1 to 100 IDs.
   */
  ensRegionIds?: string[];
  /**
   * @remarks
   * The ID of the network.
   * 
   * @example
   * n-5***
   */
  networkId?: string;
  /**
   * @remarks
   * The IDs of VPCs You can specify 1 to 100 IDs.
   */
  networkIds?: string[];
  /**
   * @remarks
   * The name of the network.
   * 
   * @example
   * example
   */
  networkName?: string;
  /**
   * @remarks
   * The page number of the returned page. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: **1 to 50**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      ensRegionId: 'EnsRegionId',
      ensRegionIds: 'EnsRegionIds',
      networkId: 'NetworkId',
      networkIds: 'NetworkIds',
      networkName: 'NetworkName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionId: 'string',
      ensRegionIds: { 'type': 'array', 'itemType': 'string' },
      networkId: 'string',
      networkIds: { 'type': 'array', 'itemType': 'string' },
      networkName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ensRegionIds)) {
      $dara.Model.validateArray(this.ensRegionIds);
    }
    if(Array.isArray(this.networkIds)) {
      $dara.Model.validateArray(this.networkIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

