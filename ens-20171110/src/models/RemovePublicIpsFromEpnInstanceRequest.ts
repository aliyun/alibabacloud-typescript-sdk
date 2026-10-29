// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemovePublicIpsFromEpnInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The edge-to-edge communication instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * epn-xxxx
   */
  EPNInstanceId?: string;
  /**
   * @remarks
   * The information about the public IP addresses to be removed.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"PublicIpAddress":"2.230.XX.XX"},{"PublicIpAddress":"2.230.XX.XX"}]
   */
  instanceInfos?: string;
  static names(): { [key: string]: string } {
    return {
      EPNInstanceId: 'EPNInstanceId',
      instanceInfos: 'InstanceInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      EPNInstanceId: 'string',
      instanceInfos: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

