// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesResponseBodyInstances extends $dara.Model {
  /**
   * @remarks
   * The instance alias.
   * 
   * @example
   * instance-test
   */
  aliasName?: string;
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 2019-04-07T09:19:21Z
   */
  createTime?: string;
  /**
   * @remarks
   * The instance description.
   * 
   * @example
   * Description of the test instance.
   */
  instanceDescription?: string;
  /**
   * @remarks
   * The name of the instance, which is used to uniquely identify the instance.
   * 
   * @example
   * instance-test
   */
  instanceName?: string;
  /**
   * @remarks
   * The type of the instance.
   * 
   * *   SSD: high-performance instance
   * *   HYBRID: capacity instance
   * 
   * @example
   * HYBRID
   */
  instanceSpecification?: string;
  /**
   * @remarks
   * The status of the instance.
   * 
   * *   normal: The instance runs as expected.
   * *   forbidden: The instance is disabled.
   * *   Deleting: The instance is being released.
   * 
   * @example
   * normal
   */
  instanceStatus?: string;
  /**
   * @remarks
   * Indicates whether zone-redundant storage (ZRS) is enabled for the instance.
   * 
   * *   true: ZRS is enabled for the instance.
   * *   false: Locally redundant storage (LRS) is enabled for the instance.
   * 
   * @example
   * true
   */
  isMultiAZ?: boolean;
  /**
   * @remarks
   * The billing method.
   * 
   * *   Subscription: subscription
   * *   PayAsYouGo: pay as you go
   * 
   * @example
   * Subscription
   */
  paymentType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-huhehaote
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxh4em5jnbcd
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * ots_standard_public_cn-g4t3igqjj002
   */
  SPInstanceId?: string;
  /**
   * @remarks
   * The storage type.
   * 
   * *   SSD: high-performance
   * *   HYBRID: capacity
   * 
   * @example
   * HYBRID
   */
  storageType?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 13542356466
   */
  userId?: string;
  /**
   * @remarks
   * The VCU quota.
   * 
   * @example
   * 3
   */
  VCUQuota?: number;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      createTime: 'CreateTime',
      instanceDescription: 'InstanceDescription',
      instanceName: 'InstanceName',
      instanceSpecification: 'InstanceSpecification',
      instanceStatus: 'InstanceStatus',
      isMultiAZ: 'IsMultiAZ',
      paymentType: 'PaymentType',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      SPInstanceId: 'SPInstanceId',
      storageType: 'StorageType',
      userId: 'UserId',
      VCUQuota: 'VCUQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      createTime: 'string',
      instanceDescription: 'string',
      instanceName: 'string',
      instanceSpecification: 'string',
      instanceStatus: 'string',
      isMultiAZ: 'boolean',
      paymentType: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      SPInstanceId: 'string',
      storageType: 'string',
      userId: 'string',
      VCUQuota: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the instances.
   */
  instances?: ListInstancesResponseBodyInstances[];
  /**
   * @remarks
   * The token that determines the start position of the next query. If this parameter is empty, all instances that you want to query are returned.
   * 
   * @example
   * CAESCG15aC1xxxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID, which can be used to troubleshoot issues.
   * 
   * @example
   * E734979F-5A44-5993-9CE5-C23103576923
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of instances returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstances },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

