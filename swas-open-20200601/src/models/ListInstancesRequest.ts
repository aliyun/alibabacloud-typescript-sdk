// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the instance. The tag key must be 1 to 64 characters in length. Valid values of N: 1 to 20.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the instance. The tag value must be 1 to 64 characters in length. Valid values of N: 1 to 20.
   * 
   * @example
   * TestValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * - PrePaid: subscription. Currently, only the subscription billing method is supported.
   * 
   * Default value: PrePaid.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The instance IDs of the simple application servers. The value can be a JSON array that consists of up to 100 instance IDs. Separate multiple IDs with commas (,).
   * 
   * > If you specify both the InstanceIds and PublicIpAddresses parameters, ensure that the specified instance IDs and public IP addresses belong to the same simple application server. Otherwise, an empty response is returned.
   * 
   * @example
   * ["2ad1ae67295445f598017499dc****", "2ad1ae67295445f598017123dc****"]
   */
  instanceIds?: string;
  /**
   * @remarks
   * The name of the simple application server. You can use the asterisk (*) wildcard for fuzzy search.
   * 
   * @example
   * test
   */
  instanceName?: string;
  /**
   * @remarks
   * The page number of the simple application server list.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in a paged query. Maximum value: 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The plan type. Valid values:
   * 
   * - NORMAL: general-purpose.
   * - CAPACITY: storage-optimized.
   * - PREVIOUS: previous generation.
   * - MULTI_IP: multi-public-IP.
   * - INTERNATIONAL: international.
   * 
   * > For more information, see [Instance families](https://help.aliyun.com/document_detail/2861773.html).
   * 
   * @example
   * NORMAL
   */
  planType?: string;
  /**
   * @remarks
   * The public IP addresses of the simple application servers. The value can be a JSON array that consists of up to 100 public IP addresses. Separate multiple IP addresses with commas (,).
   * 
   * > If you specify both the InstanceIds and PublicIpAddresses parameters, ensure that the specified instance IDs and public IP addresses belong to the same simple application server. Otherwise, an empty response is returned.
   * 
   * @example
   * ["``42.1.**.**``", "``42.2.**.**``"]
   */
  publicIpAddresses?: string;
  /**
   * @remarks
   * The region ID of the simple application server.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the simple application server belongs.
   * 
   * @example
   * rg-aek2bti7cf7****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The instance status. Valid values:
   * 
   * - Pending: The instance is being prepared.
   * - Starting: The instance is starting.
   * - Running: The instance is running.
   * - Stopping: The instance is stopping.
   * - Stopped: The instance is stopped.
   * - Resetting: The instance is being reset.
   * - Upgrading: The instance is being upgraded.
   * - Disabled: The instance is unavailable.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The tags of the instance.
   */
  tag?: ListInstancesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      instanceIds: 'InstanceIds',
      instanceName: 'InstanceName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      planType: 'PlanType',
      publicIpAddresses: 'PublicIpAddresses',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      instanceIds: 'string',
      instanceName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      planType: 'string',
      publicIpAddresses: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tag: { 'type': 'array', 'itemType': ListInstancesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

