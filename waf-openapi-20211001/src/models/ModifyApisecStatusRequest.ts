// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyApisecStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The status of the API security module. Valid values:
   * 
   * *   **1**: enabled
   * *   **0**: disabled
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  apisecStatus?: number;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf-cn-tl32ast****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region in which the Web Application Firewall (WAF) instance is deployed. Valid values:
   * 
   * *   **cn-hangzhou**: Chinese mainland
   * *   **ap-southeast-1**: outside the Chinese mainland
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the protected object group to which the protected object belongs.
   * 
   * @example
   * group
   */
  resourceGroups?: string;
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
   * The name of the protected object.
   * 
   * @example
   * alb-wewbb23dfset***
   */
  resources?: string;
  static names(): { [key: string]: string } {
    return {
      apisecStatus: 'ApisecStatus',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceGroups: 'ResourceGroups',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apisecStatus: 'number',
      instanceId: 'string',
      regionId: 'string',
      resourceGroups: 'string',
      resourceManagerResourceGroupId: 'string',
      resources: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

