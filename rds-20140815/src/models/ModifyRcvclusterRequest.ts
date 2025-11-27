// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRCVClusterRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cd21387ea640145bab79a78276c1a****
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  supportDiskPerformanceLevel?: string[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      regionId: 'RegionId',
      supportDiskPerformanceLevel: 'SupportDiskPerformanceLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      regionId: 'string',
      supportDiskPerformanceLevel: { 'type': 'array', 'itemType': 'string' },
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

