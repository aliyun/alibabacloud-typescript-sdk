// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyMemberAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the member. The description must be 1 to 256 characters in length, and can contain letters, digits, periods (.), underscores (_), hyphens (-), and asterisks (\\*).
   * 
   * This parameter is required.
   * 
   * @example
   * account1
   */
  description?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_elasticity**-*******021
   */
  instanceId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the managed member.
   * 
   * This parameter is required.
   * 
   * @example
   * 131**********39
   */
  memberAccountId?: string;
  /**
   * @remarks
   * The region in which the Web Application Firewall (WAF) instance is deployed. Valid values:
   * 
   * *   **cn-hangzhou**: Chinese mainland.
   * *   **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The source IP address of the request. The system automatically obtains the value of this parameter.
   * 
   * @example
   * 0.0.XX.XX
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      instanceId: 'InstanceId',
      memberAccountId: 'MemberAccountId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceId: 'string',
      memberAccountId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

