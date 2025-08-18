// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceIpWhitelistRequest extends $dara.Model {
  /**
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @example
   * default
   */
  groupName?: string;
  /**
   * @example
   * ra-supabase-8moov5lxba****
   */
  instanceName?: string;
  /**
   * @example
   * 10.23.XXX.XXX
   */
  ipWhitelist?: string;
  /**
   * @example
   * Cover
   */
  modifyMode?: string;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      groupName: 'GroupName',
      instanceName: 'InstanceName',
      ipWhitelist: 'IpWhitelist',
      modifyMode: 'ModifyMode',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      groupName: 'string',
      instanceName: 'string',
      ipWhitelist: 'string',
      modifyMode: 'string',
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

