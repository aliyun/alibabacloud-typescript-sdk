// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachDdosToAcceleratorRequestDdosConfigList extends $dara.Model {
  ddosId?: string;
  ddosRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      ddosId: 'DdosId',
      ddosRegionId: 'DdosRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ddosId: 'string',
      ddosRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachDdosToAcceleratorRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the GA instance with which the Anti-DDoS Pro/Premium instance is associated.
   * 
   * This parameter is required.
   * 
   * @example
   * ga-bp1odcab8tmno0hdq****
   */
  acceleratorId?: string;
  ddosConfigList?: AttachDdosToAcceleratorRequestDdosConfigList[];
  /**
   * @remarks
   * The ID of the Anti-DDoS Pro/Premium instance to be associated with the GA instance.
   * 
   * @example
   * ddoscoo-cn-zz11vq7j****
   * 
   * @deprecated
   */
  ddosId?: string;
  /**
   * @remarks
   * The region where the Anti-DDoS Pro/Premium instance is deployed. Valid values:
   * 
   * *   **cn-hangzhou**: regions in the Chinese mainland
   * *   **ap-southeast-1**: regions outside the Chinese mainland
   * 
   * @example
   * cn-hangzhou
   * 
   * @deprecated
   */
  ddosRegionId?: string;
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the region where the GA instance is deployed. Set the value to **cn-hangzhou**.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      ddosConfigList: 'DdosConfigList',
      ddosId: 'DdosId',
      ddosRegionId: 'DdosRegionId',
      dryRun: 'DryRun',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      ddosConfigList: { 'type': 'array', 'itemType': AttachDdosToAcceleratorRequestDdosConfigList },
      ddosId: 'string',
      ddosRegionId: 'string',
      dryRun: 'boolean',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ddosConfigList)) {
      $dara.Model.validateArray(this.ddosConfigList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

