// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyApisecEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the hybrid cloud cluster.
   * > This parameter applies only to hybrid cloud scenarios. You can call the [DescribeHybridCloudClusters](https://help.aliyun.com/document_detail/2849376.html) operation to query hybrid cloud cluster information.
   * 
   * @example
   * 428
   */
  clusterId?: string;
  /**
   * @remarks
   * The IDs of the API security events.
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
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to obtain the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v3prepaid_***
   */
  instanceId?: string;
  /**
   * @remarks
   * The note.
   * 
   * @example
   * already confirmed.
   */
  note?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * - **cn-hangzhou**: the Chinese mainland
   * 
   * - **ap-southeast-1**: outside the Chinese mainland
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
   * The status of the event. Valid values:
   * 
   * - **toBeConfirmed**: to be confirmed
   * - **confirmed**: confirmed
   * - **ignored**: ignored
   * 
   * This parameter is required.
   * 
   * @example
   * confirmed
   */
  userStatus?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      eventIds: 'EventIds',
      eventScope: 'EventScope',
      instanceId: 'InstanceId',
      note: 'Note',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      userStatus: 'UserStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      eventIds: { 'type': 'array', 'itemType': 'string' },
      eventScope: 'string',
      instanceId: 'string',
      note: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      userStatus: 'string',
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

