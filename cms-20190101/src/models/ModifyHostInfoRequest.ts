// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyHostInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the host.
   * 
   * @example
   * portalHost
   */
  hostName?: string;
  /**
   * @remarks
   * The ID of the instance. Only hosts not on Alibaba Cloud are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * host-R_NSWNV****
   */
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      hostName: 'HostName',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostName: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

