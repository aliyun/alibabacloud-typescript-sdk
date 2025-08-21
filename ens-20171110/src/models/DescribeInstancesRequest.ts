// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesRequestTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag that are to add to the instance. Valid values: 1 to 20.
   * 
   * @example
   * tag
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the instance. Valid values: 1 to 20.
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
   * The region ID.
   * 
   * @example
   * cn-beijing-cmcc
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The IDs of the regions. The value is a JSON array that consists of up to 100 IDs. Separate multiple IDs with commas (,).
   * 
   * @example
   * ["cn-suzhou-telecom","cn-chengdu-telecom"]
   */
  ensRegionIds?: string;
  /**
   * @remarks
   * The ID of the edge service. You can use the ID to query information about the instances that are created in the edge service.
   * 
   * @example
   * ens-20190730202316s****
   */
  ensServiceId?: string;
  /**
   * @remarks
   * The ID of the image.
   * 
   * @example
   * centos_6_08_64_20G_alibase_****
   */
  imageId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * i-5iqczfxps7csjrxeca****
   */
  instanceId?: string;
  /**
   * @remarks
   * The IDs of the instances. The value is a JSON array that consists of up to 100 IDs. Separate IDs with commas (,).
   * 
   * @example
   * ["i-5iqczfxps7csjrxeca07****", "i-5iqczfxps7csjrxeca07****"]]
   */
  instanceIds?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * TestName
   */
  instanceName?: string;
  /**
   * @remarks
   * The condition that you want to use to filter instances by category. Valid values:
   * 
   * *   EnsInstance: ENS instances that you purchase.
   * *   EnsService: ENS instances that belong to edge services.
   * *   BuildMachine: ENS instances that are configured with image builders.
   * *   EnsPostPaidInstance: Pay-as-you-go ENS instances that you purchase.
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
   * The internal IP address of the instance.
   * 
   * @example
   * 47.100.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * The ID of the network.
   * 
   * @example
   * n-2zeuphj08tt7q3brd****
   */
  networkId?: string;
  /**
   * @remarks
   * The method that you want to use to sort instances. The value of this parameter is in the JSON format.
   * 
   * You can sort instances by name, expiration time, node ID, or creation time. You can specify one or more methods.
   * 
   * @example
   * {"InstanceNameSort":"asc","ExpireTimeSort":"asc","CreationTimeSort":"desc"}}
   */
  orderByParams?: string;
  /**
   * @remarks
   * The page number. Pages start from page **1**.
   * 
   * Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. The maximum value is **100**.
   * 
   * Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The keyword that you use to query the logs of the service. You can specify the values of parameters such as **ip**, **InstanceName**, and **InstanceId** as the keyword.
   * 
   * @example
   * Joshua
   */
  searchKey?: string;
  /**
   * @remarks
   * The ID of the security group.
   * 
   * @example
   * sg-5kyicq2kfcapxrdds6tar7jqb
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The status of the service. Valid values.
   */
  serviceStatus?: string[];
  /**
   * @remarks
   * The status of the instance. Valid values:
   * 
   * *   Running
   * *   Stopped
   * *   Expired
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The tags that are added to the resource. This operation does not return tag information. You can call this operation in combination with the tag-related operations.
   */
  tags?: DescribeInstancesRequestTags[];
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-2zeh0r1pabwtg6wcs****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
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
    };
  }

  static types(): { [key: string]: any } {
    return {
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
    };
  }

  validate() {
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

