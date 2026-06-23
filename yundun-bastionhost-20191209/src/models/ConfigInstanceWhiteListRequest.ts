// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigInstanceWhiteListRequestWhiteListPolicies extends $dara.Model {
  /**
   * @remarks
   * The description of this whitelist rule.
   */
  description?: string;
  /**
   * @remarks
   * The IP addresses to add to the whitelist. You can specify up to 50 IP addresses, separated by a comma.
   * 
   * @example
   * 10.162.XX.XX,192.168.XX.XX
   */
  entry?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      entry: 'Entry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      entry: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigInstanceWhiteListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Bastionhost instance to configure.
   * 
   * > To obtain the instance ID, call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-78v1gh****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the Bastionhost instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The list of IP addresses to add to the whitelist.
   * 
   * @example
   * 10.162.XX.XX
   */
  whiteList?: string[];
  /**
   * @remarks
   * The policies for the public IP address whitelist.
   */
  whiteListPolicies?: ConfigInstanceWhiteListRequestWhiteListPolicies[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      whiteList: 'WhiteList',
      whiteListPolicies: 'WhiteListPolicies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      whiteList: { 'type': 'array', 'itemType': 'string' },
      whiteListPolicies: { 'type': 'array', 'itemType': ConfigInstanceWhiteListRequestWhiteListPolicies },
    };
  }

  validate() {
    if(Array.isArray(this.whiteList)) {
      $dara.Model.validateArray(this.whiteList);
    }
    if(Array.isArray(this.whiteListPolicies)) {
      $dara.Model.validateArray(this.whiteListPolicies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

