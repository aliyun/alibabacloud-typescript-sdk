// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRCVClustersResponseBodyVClusters extends $dara.Model {
  /**
   * @example
   * cd21387ea640145bab79a78276c1a****
   */
  clusterId?: string;
  /**
   * @example
   * 1
   */
  instanceCount?: number;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  supportDiskPerformanceLevel?: string[];
  /**
   * @example
   * vpc-2zeqj40j2ce0s5yhg****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      instanceCount: 'InstanceCount',
      regionId: 'RegionId',
      supportDiskPerformanceLevel: 'SupportDiskPerformanceLevel',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      instanceCount: 'number',
      regionId: 'string',
      supportDiskPerformanceLevel: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.supportDiskPerformanceLevel)) {
      $dara.Model.validateArray(this.supportDiskPerformanceLevel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRCVClustersResponseBody extends $dara.Model {
  /**
   * @example
   * 07F6177E-6DE4-408A-BB4F-0723301340F3
   */
  requestId?: string;
  VClusters?: ListRCVClustersResponseBodyVClusters[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      VClusters: 'VClusters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      VClusters: { 'type': 'array', 'itemType': ListRCVClustersResponseBodyVClusters },
    };
  }

  validate() {
    if(Array.isArray(this.VClusters)) {
      $dara.Model.validateArray(this.VClusters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

