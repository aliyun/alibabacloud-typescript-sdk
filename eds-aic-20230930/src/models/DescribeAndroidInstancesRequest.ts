// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAndroidInstancesRequestTag } from "./DescribeAndroidInstancesRequestTag";


export class DescribeAndroidInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the instances.
   */
  androidInstanceIds?: string[];
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * name
   */
  androidInstanceName?: string;
  appManagePolicyId?: string;
  authorizedUserId?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/2807298.html) operation to query the regions where Cloud Phone is supported.
   * 
   * @example
   * cn-shanghai
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The billing method.
   * 
   * Valid values:
   * 
   * *   PostPaid: pay-as-you-go.
   * *   PrePaid: subscription.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The ID of the instance group.
   * 
   * @example
   * ag-25nt4kk9whjh****
   */
  instanceGroupId?: string;
  /**
   * @remarks
   * The IDs of the instance groups.
   */
  instanceGroupIds?: string[];
  /**
   * @remarks
   * The name of the instance group.
   * 
   * @example
   * test
   */
  instanceGroupName?: string;
  /**
   * @remarks
   * The ID of the bound key pair.
   * 
   * @example
   * kp-5hh431emkpuoi****
   */
  keyPairId?: string;
  /**
   * @remarks
   * The maximum number of entries per page. Valid values: 1 to 100. Default value: 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. If the parameter is left empty, the data is queried from the first entry.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6kw9dGL5jves2FS9RLq****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * node_id
   */
  nodeId?: string;
  /**
   * @remarks
   * The name of the node.
   * 
   * @example
   * node_name
   */
  nodeName?: string;
  officeSiteIds?: string[];
  qosRuleIds?: string[];
  /**
   * @remarks
   * The sales mode.
   * 
   * Valid values:
   * 
   * *   Instance: the standard mode.
   * *   Node: the node mode.
   * 
   * @example
   * Instance
   */
  saleMode?: string;
  /**
   * @remarks
   * The state of the instance.
   * 
   * Valid values:
   * 
   * *   BACKUPING: The instance is being backed up.
   * *   STARTING: The instance is being started.
   * *   RUNNING: The instance group is available.
   * *   DELETING: The instance is being deleted.
   * *   BACKUP_FAILED: The backup operation failed.
   * *   DELETED: The instance is deleted.
   * *   FAILED: The instance failed to be created.
   * *   STOPPED: The instance is stopped.
   * *   RECOVERING: The instance has an ongoing file recovery task.
   * *   UNAVAILABLE: The instance has an exception.
   * *   REBOOTING: The instance is being restarted.
   * *   RESETTING: The instance is being reset.
   * *   STOPPING: The instance is being stopped.
   * *   RECOVER_FAILED: The file recovery task failed.
   * *   CREATING: The instance is being created.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The tags of the resources.
   */
  tag?: DescribeAndroidInstancesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      androidInstanceIds: 'AndroidInstanceIds',
      androidInstanceName: 'AndroidInstanceName',
      appManagePolicyId: 'AppManagePolicyId',
      authorizedUserId: 'AuthorizedUserId',
      bizRegionId: 'BizRegionId',
      chargeType: 'ChargeType',
      instanceGroupId: 'InstanceGroupId',
      instanceGroupIds: 'InstanceGroupIds',
      instanceGroupName: 'InstanceGroupName',
      keyPairId: 'KeyPairId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      officeSiteIds: 'OfficeSiteIds',
      qosRuleIds: 'QosRuleIds',
      saleMode: 'SaleMode',
      status: 'Status',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceIds: { 'type': 'array', 'itemType': 'string' },
      androidInstanceName: 'string',
      appManagePolicyId: 'string',
      authorizedUserId: 'string',
      bizRegionId: 'string',
      chargeType: 'string',
      instanceGroupId: 'string',
      instanceGroupIds: { 'type': 'array', 'itemType': 'string' },
      instanceGroupName: 'string',
      keyPairId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      nodeId: 'string',
      nodeName: 'string',
      officeSiteIds: { 'type': 'array', 'itemType': 'string' },
      qosRuleIds: { 'type': 'array', 'itemType': 'string' },
      saleMode: 'string',
      status: 'string',
      tag: { 'type': 'array', 'itemType': DescribeAndroidInstancesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.androidInstanceIds)) {
      $dara.Model.validateArray(this.androidInstanceIds);
    }
    if(Array.isArray(this.instanceGroupIds)) {
      $dara.Model.validateArray(this.instanceGroupIds);
    }
    if(Array.isArray(this.officeSiteIds)) {
      $dara.Model.validateArray(this.officeSiteIds);
    }
    if(Array.isArray(this.qosRuleIds)) {
      $dara.Model.validateArray(this.qosRuleIds);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

