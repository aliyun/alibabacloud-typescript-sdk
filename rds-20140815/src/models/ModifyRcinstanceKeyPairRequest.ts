// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRCInstanceKeyPairRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rc-m5sc1271fv344a1r****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the key pair.
   * 
   * @example
   * customer_keypairs
   */
  keyPairName?: string;
  /**
   * @remarks
   * Specifies whether to restart the instance.
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * ture
   */
  reboot?: boolean;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      keyPairName: 'KeyPairName',
      reboot: 'Reboot',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      keyPairName: 'string',
      reboot: 'boolean',
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

