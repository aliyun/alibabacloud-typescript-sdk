// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DryRunConfigRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The complete configuration information of the resource.
   * 
   * @example
   * {
   *   "ResourceCreationTime": 1741241360000,
   *   "AccountId": 123,
   *   "Configuration": {
   *     "ResourceGroupId": "",
   *     "Memory": 1024,
   *     "InstanceChargeType": "PrePaid",
   *     "Cpu": 1,
   *     "OSName": "Alibaba Cloud Linux  3.2104 LTS 64 bit",
   *     "InstanceNetworkType": "vpc",
   *     "InnerIpAddress": {
   *       "IpAddress": []
   *     },
   *     "ExpiredTime": "2026-05-06T16:00Z",
   *     "ImageId": "aliyun_3_x64_20G_alibase_20250117.vhd",
   *     "EipAddress": {
   *       "AllocationId": "",
   *       "IpAddress": "",
   *       "InternetChargeType": ""
   *     },
   *     "ImageOptions": {},
   *     "Status": "Running",
   *     "AdditionalInfo": {},
   *     "HibernationOptions": {
   *       "Configured": false
   *     }
   *   },
   *   "ResourceId": "i-bp1d8kd8ztaynb4c****",
   *   "ResourceName": "****",
   *   "ResourceStatus": "Running",
   *   "Region": "cn-hangzhou",
   *   "AvailabilityZone": "cn-hangzhou-h",
   *   "ResourceType": "ACS::ECS::Instance",
   *   "ResourceDeleted": 1
   * }
   */
  configurationItem?: string;
  /**
   * @remarks
   * The resource type that is evaluated by the rule.
   * 
   * @example
   * ACS::ECS::Instance
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      configurationItem: 'ConfigurationItem',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configurationItem: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

