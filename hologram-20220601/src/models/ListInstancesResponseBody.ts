// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesResponseBodyInstanceListEndpoints extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the endpoint is enabled.
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
   * The ID of the VPC-connected instance.
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
   * The commodity code, which is consistent with the product detail code in the User Center.
   * 
   * @example
   * hologram_postpay_public_cn
   */
  commodityCode?: string;
  /**
   * @remarks
   * The creation time. The time is displayed in UTC and formatted according to ISO 8601.
   * 
   * @example
   * 2022-12-16T02:24:05Z
   */
  creationTime?: string;
  /**
   * @remarks
   * Specifies whether data lakehouse acceleration is enabled.
   * 
   * @example
   * true
   */
  enableHiveAccess?: string;
  /**
   * @remarks
   * Specifies whether SSL is enabled.
   * 
   * @example
   * true
   */
  enableSSL?: string;
  /**
   * @remarks
   * The list of endpoints.
   */
  endpoints?: ListInstancesResponseBodyInstanceListEndpoints[];
  /**
   * @remarks
   * The expiration time. The time is displayed in UTC and formatted according to ISO 8601.
   * 
   * @example
   * 2023-05-04T16:00:00.000Z
   */
  expirationTime?: string;
  /**
   * @remarks
   * The billing method of the instance.
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
   * The instance name.
   * 
   * @example
   * test_instance
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance status.
   * 
   * @example
   * Running
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * Standard
   */
  instanceType?: string;
  /**
   * @remarks
   * The leader instance ID.
   * 
   * @example
   * hgprecn-cn-2r42sqvxm006
   */
  leaderInstanceId?: string;
  /**
   * @remarks
   * The region ID.
   * 
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
  /**
   * @remarks
   * The storage type. Valid values:
   * * redundant: 3AZ
   * * local: 1AZ
   * 
   * @example
   * redundant
   */
  storageType?: string;
  /**
   * @remarks
   * The reason for suspension.
   * 
   * @example
   * Manual
   */
  suspendReason?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: ListInstancesResponseBodyInstanceListTags[];
  /**
   * @remarks
   * The instance version.
   * 
   * @example
   * 1.3.37
   */
  version?: string;
  /**
   * @remarks
   * The zone ID.
   * 
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
   * The error code.
   * 
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * null
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
   * The list of instances.
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
   * Indicates whether the API call is successful.
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

