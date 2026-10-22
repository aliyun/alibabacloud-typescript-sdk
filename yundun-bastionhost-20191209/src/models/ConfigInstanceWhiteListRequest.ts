// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigInstanceWhiteListRequestWhiteListPolicies extends $dara.Model {
  /**
   * @remarks
   * The remark or description for the whitelist rule.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * The IP address whitelist to be configured. You can configure up to 50 IP addresses. To add multiple IP addresses to the whitelist, separate them with commas (,). The whitelist cannot contain 0.0.0.0/0.
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
   * Instance ID of the Bastionhost instance for which you want to configure the public IP address whitelist.
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query instance ID of the Bastionhost instance.
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
   * The IP address whitelist to be configured.
   * 
   * @example
   * 10.162.XX.XX
   */
  whiteList?: string[];
  /**
   * @remarks
   * The IP address whitelist to be configured.
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

