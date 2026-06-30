// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachDdosFromAcceleratorRequestDdosConfigList extends $dara.Model {
  /**
   * @remarks
   * The ID of the Anti-DDoS Pro or Anti-DDoS Premium instance that is associated with the Global Accelerator instance.
   * 
   * @example
   * ddosDip-cn-pj64b8cz101
   */
  ddosId?: string;
  /**
   * @remarks
   * The region where the Anti-DDoS Pro or Anti-DDoS Premium instance is deployed. Valid values:
   * 
   * - **cn-hangzhou**: the Chinese mainland.
   * 
   * - **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * ap-southeast-1
   */
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

export class DetachDdosFromAcceleratorRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Global Accelerator instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ga-bp1odcab8tmno0hdq****
   */
  acceleratorId?: string;
  /**
   * @remarks
   * A list of Anti-DDoS Pro or Anti-DDoS Premium instances that are associated with the Global Accelerator instance.
   */
  ddosConfigList?: DetachDdosFromAcceleratorRequestDdosConfigList[];
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: performs a dry run. The system checks the required parameters, request format, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the system returns an HTTP 2xx status code.
   * 
   * - **false** (default): sends a normal request. After the request passes the check, an HTTP 2xx status code is returned and the instance is detached.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the region where the Global Accelerator instance is deployed. Set the value to **cn-hangzhou**.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      ddosConfigList: 'DdosConfigList',
      dryRun: 'DryRun',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      ddosConfigList: { 'type': 'array', 'itemType': DetachDdosFromAcceleratorRequestDdosConfigList },
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

