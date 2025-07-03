// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCdcInfoResponseBodyDataInstanceTopologyListPhysicalNodes } from "./DescribeCdcInfoResponseBodyDataInstanceTopologyListPhysicalNodes";


export class DescribeCdcInfoResponseBodyDataInstanceTopologyList extends $dara.Model {
  /**
   * @example
   * BINLOG_X
   */
  clusterType?: string;
  /**
   * @example
   * ***
   */
  comment?: string;
  /**
   * @example
   * test
   */
  groupName?: string;
  /**
   * @example
   * RECORD
   */
  hashLevel?: string;
  /**
   * @example
   * pxc-***
   */
  instanceName?: string;
  physicalNodes?: DescribeCdcInfoResponseBodyDataInstanceTopologyListPhysicalNodes[];
  /**
   * @example
   * 2
   */
  streamNum?: number;
  static names(): { [key: string]: string } {
    return {
      clusterType: 'ClusterType',
      comment: 'Comment',
      groupName: 'GroupName',
      hashLevel: 'HashLevel',
      instanceName: 'InstanceName',
      physicalNodes: 'PhysicalNodes',
      streamNum: 'StreamNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterType: 'string',
      comment: 'string',
      groupName: 'string',
      hashLevel: 'string',
      instanceName: 'string',
      physicalNodes: { 'type': 'array', 'itemType': DescribeCdcInfoResponseBodyDataInstanceTopologyListPhysicalNodes },
      streamNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.physicalNodes)) {
      $dara.Model.validateArray(this.physicalNodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

