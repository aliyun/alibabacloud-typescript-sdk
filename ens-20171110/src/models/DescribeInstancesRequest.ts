// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the instance. Valid values of N: 1 to 20.
   * 
   * @example
   * tag
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the instance. Valid values of N: 1 to 20.
   * 
   * @example
   * 2
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

export class DescribeInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The list of EIP addresses used to filter instances.
   */
  eipAddresses?: string[];
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing-cmcc
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The list of edge zone IDs. This parameter is a formatted JSON array that contains up to 100 IDs separated by commas (,).
   * 
   * @example
   * ["cn-suzhou-telecom","cn-chengdu-telecom"]
   */
  ensRegionIds?: string;
  /**
   * @remarks
   * The Edge Node Service ID. You can use this ID to query the instances created under the edge service.
   * 
   * @example
   * ens-20190730202316s****
   */
  ensServiceId?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * centos_6_08_64_20G_alibase_****
   */
  imageId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-5iqczfxps7csjrxeca****
   */
  instanceId?: string;
  /**
   * @remarks
   * The list of instance IDs. This parameter is a formatted JSON array that contains up to 100 IDs separated by commas (,).
   * 
   * @example
   * ["i-5iqczfxps7csjrxeca07****", "i-5iqczfxps7csjrxeca07****"]
   */
  instanceIds?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * TestName
   */
  instanceName?: string;
  /**
   * @remarks
   * The filter type. Valid values:
   * 
   * @example
   * EnsService
   */
  instanceResourceType?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * ens.se1.tiny
   */
  instanceType?: string;
  /**
   * @remarks
   * The internal IP address.
   * 
   * @example
   * 47.100.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * The network ID.
   * 
   * @example
   * n-2zeuphj08tt7q3brd****
   */
  networkId?: string;
  /**
   * @remarks
   * The sorting parameter in JSON format.
   * 
   * @example
   * {
   *     "InstanceNameSort": "asc",
   *     "ExpireTimeSort": "asc",
   *     "CreationTimeSort": "desc",
   *     "EnsRegionId": "desc"
   * }
   */
  orderByParams?: string;
  /**
   * @remarks
   * The page number of the instance status list. The value starts from **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for a paged query. Maximum value: **100**.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The search keyword. Supports parameters such as **ip**, **InstanceName**, and **InstanceId**.
   * 
   * @example
   * Joshua
   */
  searchKey?: string;
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-5kyicq2kfcapxrdds6tar7jqb
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The business status of the instance, which does not represent the actual running status of the instance.
   */
  serviceStatus?: string[];
  /**
   * @remarks
   * The instance status. Valid values:
   * 
   * - Running: Running.
   * - Stopped: Stopped.
   * - Expired: Expired.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The resource tags. This operation does not return tag information. Use this parameter in combination with the APIs in the tag category.
   */
  tags?: DescribeInstancesRequestTags[];
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-2zeh0r1pabwtg6wcs****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPD network ID.
   * 
   * @example
   * vpd-5s7xxxxxxx
   */
  vpdId?: string;
  /**
   * @remarks
   * The VPD vSwitch ID.
   * 
   * @example
   * vsw-5s7xxxxxxx
   */
  vpdVSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      eipAddresses: 'EipAddresses',
      ensRegionId: 'EnsRegionId',
      ensRegionIds: 'EnsRegionIds',
      ensServiceId: 'EnsServiceId',
      imageId: 'ImageId',
      instanceId: 'InstanceId',
      instanceIds: 'InstanceIds',
      instanceName: 'InstanceName',
      instanceResourceType: 'InstanceResourceType',
      instanceType: 'InstanceType',
      intranetIp: 'IntranetIp',
      networkId: 'NetworkId',
      orderByParams: 'OrderByParams',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
      securityGroupId: 'SecurityGroupId',
      serviceStatus: 'ServiceStatus',
      status: 'Status',
      tags: 'Tags',
      vSwitchId: 'VSwitchId',
      vpdId: 'VpdId',
      vpdVSwitchId: 'VpdVSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipAddresses: { 'type': 'array', 'itemType': 'string' },
      ensRegionId: 'string',
      ensRegionIds: 'string',
      ensServiceId: 'string',
      imageId: 'string',
      instanceId: 'string',
      instanceIds: 'string',
      instanceName: 'string',
      instanceResourceType: 'string',
      instanceType: 'string',
      intranetIp: 'string',
      networkId: 'string',
      orderByParams: 'string',
      pageNumber: 'number',
      pageSize: 'string',
      searchKey: 'string',
      securityGroupId: 'string',
      serviceStatus: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      tags: { 'type': 'array', 'itemType': DescribeInstancesRequestTags },
      vSwitchId: 'string',
      vpdId: 'string',
      vpdVSwitchId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.eipAddresses)) {
      $dara.Model.validateArray(this.eipAddresses);
    }
    if(Array.isArray(this.serviceStatus)) {
      $dara.Model.validateArray(this.serviceStatus);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

