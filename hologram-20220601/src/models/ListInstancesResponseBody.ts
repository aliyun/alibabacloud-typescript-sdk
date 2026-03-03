// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesResponseBodyInstanceListEndpoints extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the endpoint is enabled.
   * 
   * Valid values:
   * 
   * *   true
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   false
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The endpoint.
   * 
   * @example
   * hgpostcn-cn-aaab9ad2d8fb-cn-hangzhou-internal.hologres.aliyuncs.com:80
   */
  endpoint?: string;
  /**
   * @remarks
   * The network type.
   * 
   * Valid values:
   * 
   * *   VPCSingleTunnel
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     virtual private cloud (VPC)
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   Intranet
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     internal network
   * 
   *     <!-- -->
   * 
   * *   VPCAnyTunnel
   * 
   *     <!-- -->
   * 
   *     : This value is not supported by new instances
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   Internet
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     Internet
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * @example
   * Internet
   */
  type?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-wz9oap28raidjevhuszg4
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-uf6mrahzyu7uorlqqpz5f
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the VPC to which the instance belongs.
   * 
   * @example
   * hgpostcn-cn-wwo3665tx004-frontend-st
   */
  vpcInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      endpoint: 'Endpoint',
      type: 'Type',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      vpcInstanceId: 'VpcInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      endpoint: 'string',
      type: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      vpcInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyInstanceListTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * tag
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value
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

export class ListInstancesResponseBodyInstanceList extends $dara.Model {
  /**
   * @remarks
   * The commodity code, which is the same as that on the Billing Management page.
   * 
   * @example
   * hologram_postpay_public_cn
   */
  commodityCode?: string;
  /**
   * @remarks
   * The time when the cluster was created.
   * 
   * @example
   * 2022-12-16T02:24:05Z
   */
  creationTime?: string;
  /**
   * @remarks
   * Indicates whether lakehouse acceleration is enabled.
   * 
   * Valid values:
   * 
   * *   true
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   false
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * true
   */
  enableHiveAccess?: string;
  enableSSL?: string;
  /**
   * @remarks
   * The list of endpoints.
   */
  endpoints?: ListInstancesResponseBodyInstanceListEndpoints[];
  /**
   * @remarks
   * The time when the cluster expires.
   * 
   * @example
   * 2023-05-04T16:00:00.000Z
   */
  expirationTime?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * Valid values:
   * 
   * *   PostPaid
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     pay-as-you-go
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   PrePaid
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     subscription
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * @example
   * PrePaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * hgpostcn-cn-aaab9ad2d8fb
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * test_instance
   */
  instanceName?: string;
  /**
   * @remarks
   * The status of the instance.
   * 
   * Valid values:
   * 
   * *   Creating
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Running
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Suspended
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Allocating
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * Running
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The type of the instance.
   * 
   * Valid values:
   * 
   * *   Follower
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     read-only secondary instance
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   Standard
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     normal instance
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * @example
   * Standard
   */
  instanceType?: string;
  /**
   * @remarks
   * The ID of the primary instance.
   * 
   * @example
   * hgprecn-cn-2r42sqvxm006
   */
  leaderInstanceId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmvscak73zmby
   */
  resourceGroupId?: string;
  storageType?: string;
  /**
   * @remarks
   * The reason for the suspension.
   * 
   * @example
   * Manual
   */
  suspendReason?: string;
  /**
   * @remarks
   * The tags that are added to the resource.
   */
  tags?: ListInstancesResponseBodyInstanceListTags[];
  /**
   * @remarks
   * The version of the cluster.
   * 
   * @example
   * 1.3.37
   */
  version?: string;
  /**
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      creationTime: 'CreationTime',
      enableHiveAccess: 'EnableHiveAccess',
      enableSSL: 'EnableSSL',
      endpoints: 'Endpoints',
      expirationTime: 'ExpirationTime',
      instanceChargeType: 'InstanceChargeType',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceStatus: 'InstanceStatus',
      instanceType: 'InstanceType',
      leaderInstanceId: 'LeaderInstanceId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      storageType: 'StorageType',
      suspendReason: 'SuspendReason',
      tags: 'Tags',
      version: 'Version',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      creationTime: 'string',
      enableHiveAccess: 'string',
      enableSSL: 'string',
      endpoints: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstanceListEndpoints },
      expirationTime: 'string',
      instanceChargeType: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceStatus: 'string',
      instanceType: 'string',
      leaderInstanceId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      storageType: 'string',
      suspendReason: 'string',
      tags: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstanceListTags },
      version: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.endpoints)) {
      $dara.Model.validateArray(this.endpoints);
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

export class ListInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * 404
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * Internal server error.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * The instances.
   */
  instanceList?: ListInstancesResponseBodyInstanceList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D1303CD4-AA70-5998-8025-F55B22C50840
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      instanceList: 'InstanceList',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'string',
      instanceList: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstanceList },
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceList)) {
      $dara.Model.validateArray(this.instanceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

