// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ConfigInstanceWhiteListRequestWhiteListPolicies } from "./ConfigInstanceWhiteListRequestWhiteListPolicies";


export class ConfigInstanceWhiteListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the bastion host for which you want to configure a whitelist of public IP addresses.
   * 
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query the bastion host ID.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-78v1gh****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the bastion host.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The IP address whitelist that you want to configure.
   * 
   * @example
   * 10.162.XX.XX
   */
  whiteList?: string[];
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

