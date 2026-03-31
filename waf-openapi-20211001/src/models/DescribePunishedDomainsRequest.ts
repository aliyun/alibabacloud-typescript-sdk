// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePunishedDomainsRequest extends $dara.Model {
  /**
   * @remarks
   * The domain names that are added to WAF.
   */
  domains?: string[];
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v3prepaid_public_cn-uqm****qa07
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of punishment. Valid values:
   * 
   * *   **beian** (default): the filing center.
   * *   **punishCenter**: the punishment center.
   * 
   * @example
   * beian
   */
  punishType?: string;
  /**
   * @remarks
   * The region in which the WAF instance is deployed. Valid values:
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
   * rg-aekz7nc****aata
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      instanceId: 'InstanceId',
      punishType: 'PunishType',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      punishType: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domains)) {
      $dara.Model.validateArray(this.domains);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

