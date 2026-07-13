// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceResponseBodyDataZones extends $dara.Model {
  vswitchId?: string;
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
  createTime?: string;
  instanceId?: string;
  instanceName?: string;
  instanceSpec?: string;
  networkType?: string;
  ossBucketName?: string;
  paymentType?: string;
  regionId?: string;
  securityGroup?: string;
  status?: string;
  updateTime?: string;
  vpcId?: string;
  zones?: GetInstanceResponseBodyDataZones[];
  static names(): { [key: string]: string } {
    return {
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
   * @example
   * SUCCESS
   */
  code?: string;
  data?: GetInstanceResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * request-1
   */
  requestId?: string;
  /**
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

