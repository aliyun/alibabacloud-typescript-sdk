// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeManagedInstancesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the managed instance. Valid values of N: 1 to 20. The tag key cannot be an empty string.
   * 
   * If you use a single tag to filter resources, the resource count with this tag cannot exceed 1,000. If you use multiple tags to filter resources, the resource count of resources that have all specified tags attached cannot exceed 1,000. If the resource count exceeds 1,000, call the [ListTagResources](https://help.aliyun.com/document_detail/110425.html) operation to query resources.
   * 
   * The tag key can be up to 64 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the managed instance. Valid values of N: 1 to 20. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`.
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

export class DescribeManagedInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The activation code ID.
   * 
   * @example
   * 4ECEEE12-56F1-4FBC-9AB1-890F7494****
   */
  activationId?: string;
  /**
   * @remarks
   * Specifies whether the managed instance is connected.
   * 
   * true: The managed instance is connected. You can manage the managed instance by using Cloud Assistant.
   * 
   * false: The managed instance is not connected. The server may be shut down or Cloud Assistant Agent may not be properly installed.
   * 
   * @example
   * true
   */
  connected?: string;
  /**
   * @remarks
   * The ID of the managed instance. Valid values of N: 1 to 50.
   * 
   * @example
   * mi-hz018jrc1o0****
   */
  instanceId?: string[];
  /**
   * @remarks
   * The internal IP address or public IP address of the managed instance.
   * 
   * @example
   * ``192.168.**.**``
   */
  instanceIp?: string;
  /**
   * @remarks
   * The name of the managed instance.
   * 
   * @example
   * my-webapp-server
   */
  instanceName?: string;
  /**
   * @remarks
   * The value of the MachineId parameter specified when registering the managed instance. A maximum of 36 characters are allowed.
   * Example registration script:
   * ```
   * aliyun-service --register \\
   *   --RegionId=ap-southeast-1 \\
   *   --ActivationId=xxxxxxxxxxx \\
   *   --ActivationCode=xxxxxxxxx \\
   *   --MachineId=xxxxxx \\ # Optional parameter that specifies the unique identifier of the machine
   *   --ForceResue                 
   * ```
   * 
   * - If MachineId and ForceResult are specified during registration, Cloud Assistant generates a fixed managed instance ID for this MachineId.
   * - If MachineId is not explicitly specified, Cloud Assistant automatically generates a MachineId value based on the hardware information of the machine.
   * - Recommendation: Explicitly specify MachineId and ForceResult to mark the mapping between managed instances and on-premises machines.
   * 
   * @example
   * GOG4X8312A0188
   */
  machineId?: string;
  /**
   * @remarks
   * The maximum number of entries per page for a paging query.
   * 
   * Maximum value: 50.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Set this parameter to the NextToken value returned in the previous API call.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
  /**
   * @remarks
   * The operating system type of the managed instance. Valid values:
   * 
   * - windows
   * - linux
   * - FreeBSD
   * 
   * @example
   * windows
   */
  osType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * > This parameter is about to be deprecated. Use NextToken and MaxResults to complete paging query operations.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * > This parameter is about to be deprecated. Use NextToken and MaxResults to complete paging query operations.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID. Currently supported regions: China (Qingdao), China (Beijing), China (Zhangjiakou), China (Hohhot), China (Ulanqab), China (Hangzhou), China (Shanghai), China (Shenzhen), China (Heyuan), China (Guangzhou), China (Chengdu), Hong Kong (China), Singapore, Japan (Tokyo), US (Silicon Valley), and US (Virginia).
   * 
   * You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query region IDs and other information.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the managed instance belongs.
   * 
   * @example
   * rg-123******
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tags.
   */
  tag?: DescribeManagedInstancesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      activationId: 'ActivationId',
      connected: 'Connected',
      instanceId: 'InstanceId',
      instanceIp: 'InstanceIp',
      instanceName: 'InstanceName',
      machineId: 'MachineId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      osType: 'OsType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activationId: 'string',
      connected: 'string',
      instanceId: { 'type': 'array', 'itemType': 'string' },
      instanceIp: 'string',
      instanceName: 'string',
      machineId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      osType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': DescribeManagedInstancesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.instanceId)) {
      $dara.Model.validateArray(this.instanceId);
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

