// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigInstanceWhitelistRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the HSM.
   * 
   * This parameter is required.
   * 
   * @example
   * hsm-cn-vj30bil8****
   */
  instanceId?: string;
  /**
   * @remarks
   * A list of IP addresses that you want to configure in the whitelist. Separate multiple IP addresses with spaces or commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 18.68.XX.XX,18.68.XX.XX
   */
  whitelist?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      whitelist: 'Whitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      whitelist: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

