// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachDdosToAcceleratorRequestDdosConfigList extends $dara.Model {
  /**
   * @remarks
   * The ID of the Anti-DDoS Pro or Anti-DDoS Premium instance to associate with the Global Accelerator (GA) instance.
   * 
   * @example
   * ddoscoo-cn-zz11vq7j****
   */
  ddosId?: string;
  /**
   * @remarks
   * The region of the Anti-DDoS Pro or Anti-DDoS Premium instance. Valid values:
   * 
   * - **cn-hangzhou**: the Chinese mainland.
   * 
   * - **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
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

export class AttachDdosToAcceleratorRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Global Accelerator (GA) instance with which you want to associate the Anti-DDoS Pro or Anti-DDoS Premium instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ga-bp1odcab8tmno0hdq****
   */
  acceleratorId?: string;
  /**
   * @remarks
   * The list of Anti-DDoS Pro or Anti-DDoS Premium instances to associate with the Global Accelerator (GA) instance.
   */
  ddosConfigList?: AttachDdosToAcceleratorRequestDdosConfigList[];
  /**
   * @remarks
   * The ID of the Anti-DDoS Pro or Anti-DDoS Premium instance to associate with the Global Accelerator (GA) instance.
   * 
   * @example
   * ddoscoo-cn-zz11vq7j****
   * 
   * @deprecated
   */
  ddosId?: string;
  /**
   * @remarks
   * The region of the Anti-DDoS Pro or Anti-DDoS Premium instance. Valid values:
   * 
   * - **cn-hangzhou**: the Chinese mainland.
   * 
   * - **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   * 
   * @deprecated
   */
  ddosRegionId?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: performs a dry run without actually associating the instances. The system checks the required parameters, request syntax, and business limits. If the check fails, the corresponding error is returned. If the check passes, an HTTP 2xx status code is returned.
   * 
   * - **false** (default): sends the request. After the request passes the check, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The region ID of the Global Accelerator (GA) instance. Set the value to **cn-hangzhou**.
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

