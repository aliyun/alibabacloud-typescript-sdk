// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetImageCacheResponseBodyEvents extends $dara.Model {
  /**
   * @remarks
   * The number of times the event was triggered.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The time when the event first occurred.
   * 
   * @example
   * 2025-**-**T02:24:48Z
   */
  firstTimestamp?: string;
  /**
   * @remarks
   * The time when the event last occurred.
   * 
   * @example
   * 2025-**-**T02:24:48Z
   */
  lastTimestamp?: string;
  /**
   * @remarks
   * The event message.
   * 
   * @example
   * Image cache [my-imc] has been created successfully
   */
  message?: string;
  /**
   * @remarks
   * The event name.
   * 
   * @example
   * imagetest.1661f31f851*****
   */
  name?: string;
  /**
   * @remarks
   * The cause of the event.
   * 
   * @example
   * ImageCacheCreated
   */
  reason?: string;
  /**
   * @remarks
   * The event type.
   * 
   * @example
   * Normal
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      firstTimestamp: 'FirstTimestamp',
      lastTimestamp: 'LastTimestamp',
      message: 'Message',
      name: 'Name',
      reason: 'Reason',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      firstTimestamp: 'string',
      lastTimestamp: 'string',
      message: 'string',
      name: 'string',
      reason: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageCacheResponseBodyNetworkConfigEipInstance extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically create an EIP.
   * 
   * @example
   * true
   */
  autoCreate?: boolean;
  /**
   * @remarks
   * The bandwidth of the automatically created EIP. Unit: Mbit/s.
   * 
   * @example
   * 100
   */
  bandwidth?: number;
  /**
   * @remarks
   * The elastic IP address.
   * 
   * @example
   * eip-0jl0bx3fnpnjc9i4*****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      autoCreate: 'AutoCreate',
      bandwidth: 'Bandwidth',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoCreate: 'boolean',
      bandwidth: 'number',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageCacheResponseBodyNetworkConfig extends $dara.Model {
  /**
   * @remarks
   * The configurations of the elastic IP address (EIP) instance.
   */
  eipInstance?: GetImageCacheResponseBodyNetworkConfigEipInstance;
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-0jlgektkddwa42n*****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The vSwitch IDs.
   */
  vSwitchIds?: string[];
  static names(): { [key: string]: string } {
    return {
      eipInstance: 'EipInstance',
      securityGroupId: 'SecurityGroupId',
      vSwitchIds: 'VSwitchIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipInstance: GetImageCacheResponseBodyNetworkConfigEipInstance,
      securityGroupId: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.eipInstance && typeof (this.eipInstance as any).validate === 'function') {
      (this.eipInstance as any).validate();
    }
    if(Array.isArray(this.vSwitchIds)) {
      $dara.Model.validateArray(this.vSwitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageCacheResponseBodyTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the image cache.
   * 
   * @example
   * imc
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the image cache.
   * 
   * @example
   * test
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

export class GetImageCacheResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the image cache was created, in ISO 8601 format and UTC.
   * 
   * @example
   * 2025-**-**T07:55:25Z
   */
  createTime?: string;
  /**
   * @remarks
   * The events of the image cache.
   */
  events?: GetImageCacheResponseBodyEvents[];
  /**
   * @remarks
   * The image cache ID.
   * 
   * @example
   * imc-bp1dj*****
   */
  imageCacheId?: string;
  /**
   * @remarks
   * The name of the image cache.
   * 
   * @example
   * my-imc
   */
  imageCacheName?: string;
  /**
   * @remarks
   * The names of the container images in the image cache.
   */
  images?: string[];
  /**
   * @remarks
   * The network configurations for pulling images when the image cache is created.
   */
  networkConfig?: GetImageCacheResponseBodyNetworkConfig;
  /**
   * @remarks
   * The billing method.
   * 
   * @example
   * PayAsYouGo
   */
  paymentType?: string;
  /**
   * @remarks
   * The platform type of the image cache. Valid values: linux/amd64 and windows/amd64.
   * 
   * @example
   * windows/amd64
   */
  platform?: string;
  /**
   * @remarks
   * The time when the image cache becomes active, in ISO 8601 format and UTC.
   * 
   * @example
   * 2025-**-**T07:58:25Z
   */
  readyTime?: string;
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
   * The request ID.
   * 
   * @example
   * 0E234675-3465-4CC3-9D0F-9A864BC*****
   */
  requestId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aekzh43v*****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The size of the image cache. Unit: GiB. Minimum value: 1 GiB.
   * 
   * @example
   * 8
   */
  size?: number;
  /**
   * @remarks
   * The status of the image cache.
   * 
   * @example
   * Ready
   */
  status?: string;
  /**
   * @remarks
   * The tags of the image cache. Up to 20 tags are supported.
   */
  tags?: GetImageCacheResponseBodyTags[];
  /**
   * @remarks
   * The image cache type. Valid values: `General`, `Base`, and `Derived`.
   * 
   * @example
   * General
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      events: 'Events',
      imageCacheId: 'ImageCacheId',
      imageCacheName: 'ImageCacheName',
      images: 'Images',
      networkConfig: 'NetworkConfig',
      paymentType: 'PaymentType',
      platform: 'Platform',
      readyTime: 'ReadyTime',
      regionId: 'RegionId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      size: 'Size',
      status: 'Status',
      tags: 'Tags',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      events: { 'type': 'array', 'itemType': GetImageCacheResponseBodyEvents },
      imageCacheId: 'string',
      imageCacheName: 'string',
      images: { 'type': 'array', 'itemType': 'string' },
      networkConfig: GetImageCacheResponseBodyNetworkConfig,
      paymentType: 'string',
      platform: 'string',
      readyTime: 'string',
      regionId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      size: 'number',
      status: 'string',
      tags: { 'type': 'array', 'itemType': GetImageCacheResponseBodyTags },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.events)) {
      $dara.Model.validateArray(this.events);
    }
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    if(this.networkConfig && typeof (this.networkConfig as any).validate === 'function') {
      (this.networkConfig as any).validate();
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

