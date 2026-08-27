// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceResponseBodyDataZones extends $dara.Model {
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp1xxxx
   */
  vswitchId?: string;
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
      vswitchId: 'VswitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vswitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The AI Registry namespace ID.
   * 
   * @example
   * b5b4e373-xxxx-xxxx-xxxx-5d273df67432
   */
  aiRegistryNamespaceId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-06-05T10:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * instance-2
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * agentteams-demo
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance specification. The value is returned in a format such as small.x1.
   * 
   * @example
   * small.x1
   */
  instanceSpec?: string;
  /**
   * @remarks
   * The network type.
   * 
   * @example
   * PRIVATE_NET
   */
  networkType?: string;
  /**
   * @remarks
   * The OSS bucket name.
   * 
   * @example
   * agentteams-bucket
   */
  ossBucketName?: string;
  /**
   * @remarks
   * The billing method.
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
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-bp1xxxx
   */
  securityGroup?: string;
  /**
   * @remarks
   * The instance status. Valid values:
   * - RUNNING: running.
   * - STOPPED: stopped.
   * - CREATING: being created.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2026-06-05T10:05:00Z
   */
  updateTime?: string;
  /**
   * @remarks
   * VPC ID
   * 
   * @example
   * vpc-bp1xxxx
   */
  vpcId?: string;
  /**
   * @remarks
   * The list of vSwitch IDs.
   * 
   * @example
   * [...]
   */
  zones?: GetInstanceResponseBodyDataZones[];
  static names(): { [key: string]: string } {
    return {
      aiRegistryNamespaceId: 'AiRegistryNamespaceId',
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceSpec: 'InstanceSpec',
      networkType: 'NetworkType',
      ossBucketName: 'OssBucketName',
      paymentType: 'PaymentType',
      regionId: 'RegionId',
      securityGroup: 'SecurityGroup',
      status: 'Status',
      updateTime: 'UpdateTime',
      vpcId: 'VpcId',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiRegistryNamespaceId: 'string',
      createTime: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceSpec: 'string',
      networkType: 'string',
      ossBucketName: 'string',
      paymentType: 'string',
      regionId: 'string',
      securityGroup: 'string',
      status: 'string',
      updateTime: 'string',
      vpcId: 'string',
      zones: { 'type': 'array', 'itemType': GetInstanceResponseBodyDataZones },
    };
  }

  validate() {
    if(Array.isArray(this.zones)) {
      $dara.Model.validateArray(this.zones);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The value is fixed as SUCCESS.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The instance details.
   * 
   * @example
   * {}
   */
  data?: GetInstanceResponseBodyData;
  /**
   * @remarks
   * The response message. The value is fixed as success.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * request-1
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. The value is fixed as `true`.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetInstanceResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

