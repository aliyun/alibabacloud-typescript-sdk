// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkPeerConnectionsRequest extends $dara.Model {
  /**
   * @example
   * cn-xian-unicom
   */
  ensRegionId?: string;
  /**
   * @example
   * pcc-5inkeimcipxk26yqtzm4q****
   */
  instanceId?: string;
  /**
   * @example
   * test0
   */
  name?: string;
  networkIds?: string[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
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

