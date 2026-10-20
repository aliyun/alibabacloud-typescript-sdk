// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworksRequest extends $dara.Model {
  /**
   * @remarks
   * The ENS edge zone ID.
   * 
   * @example
   * cn-beijing-telecom
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The array of ENS edge zone IDs. Array length: 1 to 100.
   */
  ensRegionIds?: string[];
  /**
   * @remarks
   * The network ID.
   * 
   * @example
   * n-5***
   */
  networkId?: string;
  /**
   * @remarks
   * The array of network IDs. Array length: 1 to 100.
   */
  networkIds?: string[];
  /**
   * @remarks
   * The network name.
   * 
   * @example
   * example
   */
  networkName?: string;
  /**
   * @remarks
   * The page number of the list. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in a paging query. Maximum value: **50**. Default value: **10**.
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

