// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteApisecEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The hybrid cloud cluster ID.
   * > This parameter applies only to hybrid cloud scenarios. You can call [DescribeHybridCloudClusters](https://help.aliyun.com/document_detail/2849376.html) to obtain hybrid cloud cluster information.
   * 
   * @example
   * 428
   */
  clusterId?: string;
  /**
   * @remarks
   * The list of API security event IDs.
   * 
   * This parameter is required.
   */
  eventIds?: string[];
  /**
   * @remarks
   * The dimension of the security event.
   * 
   * @example
   * ip
   */
  eventScope?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * > You can call [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) to query the ID of the current WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v3prepaid_public_cn-g4t*****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region where the WAF instance is deployed. Valid values:
   * 
   * - **cn-hangzhou**: the Chinese mainland.
   * 
   * - **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The Alibaba Cloud resource group ID.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      eventIds: 'EventIds',
      eventScope: 'EventScope',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      eventIds: { 'type': 'array', 'itemType': 'string' },
      eventScope: 'string',
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.eventIds)) {
      $dara.Model.validateArray(this.eventIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

