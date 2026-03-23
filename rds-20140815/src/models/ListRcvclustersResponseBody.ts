// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRCVClustersResponseBodyVClusters extends $dara.Model {
  clusterId?: string;
  instanceCount?: number;
  regionId?: string;
  supportDiskPerformanceLevel?: string[];
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

