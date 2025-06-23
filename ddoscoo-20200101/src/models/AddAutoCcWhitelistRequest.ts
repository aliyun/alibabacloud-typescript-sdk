// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddAutoCcWhitelistRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * > This parameter indicates the validity period of the IP address blacklist. By default, the traffic from the IP addresses that you add to the whitelist is always allowed. You do not need to set this parameter.
   * 
   * @example
   * 0
   */
  expireTime?: number;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * > You can call the [DescribeInstanceIds](https://help.aliyun.com/document_detail/157459.html) operation to query the IDs of all instances.
   * 
   * This parameter is required.
   * 
   * @example
   * ddoscoo-cn-mp91j1ao****
   */
  instanceId?: string;
  /**
   * @remarks
   * The configuration of the IP addresses that you want to add to the whitelist. The value is a string that consists of JSON arrays. Each element in a JSON array is a JSON struct that contains the following fields:
   * 
   * *   **src**: the IP address that you want to add. This parameter is required. Data type: string.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"src":"192.XX.XX.1"},{"src":"192.XX.XX.2"}]
   */
  whitelist?: string;
  static names(): { [key: string]: string } {
    return {
      expireTime: 'ExpireTime',
      instanceId: 'InstanceId',
      whitelist: 'Whitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireTime: 'number',
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

