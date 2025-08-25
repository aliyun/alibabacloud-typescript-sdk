// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetImageCacheResponseBodyEvents extends $dara.Model {
  /**
   * @example
   * 1
   */
  count?: number;
  /**
   * @example
   * 2025-**-**T02:24:48Z
   */
  firstTimestamp?: string;
  /**
   * @example
   * 2025-**-**T02:24:48Z
   */
  lastTimestamp?: string;
  /**
   * @example
   * Image cache [my-imc] has been created successfully
   */
  message?: string;
  /**
   * @example
   * imagetest.1661f31f851*****
   */
  name?: string;
  /**
   * @example
   * ImageCacheCreated
   */
  reason?: string;
  /**
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
   * @example
   * true
   */
  autoCreate?: boolean;
  /**
   * @example
   * 100
   */
  bandwidth?: number;
  /**
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
  eipInstance?: GetImageCacheResponseBodyNetworkConfigEipInstance;
  /**
   * @example
   * sg-0jlgektkddwa42n*****
   */
  securityGroupId?: string;
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
   * @example
   * imc
   */
  key?: string;
  /**
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
   * @example
   * 2025-**-**T07:55:25Z
   */
  createTime?: string;
  events?: GetImageCacheResponseBodyEvents[];
  /**
   * @example
   * imc-bp1dj*****
   */
  imageCacheId?: string;
  /**
   * @example
   * my-imc
   */
  imageCacheName?: string;
  images?: string[];
  networkConfig?: GetImageCacheResponseBodyNetworkConfig;
  /**
   * @example
   * PayAsYouGo
   */
  paymentType?: string;
  /**
   * @example
   * 2025-**-**T07:58:25Z
   */
  readyTime?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 0E234675-3465-4CC3-9D0F-9A864BC*****
   */
  requestId?: string;
  /**
   * @example
   * rg-aekzh43v*****
   */
  resourceGroupId?: string;
  /**
   * @example
   * 8
   */
  size?: number;
  /**
   * @example
   * Ready
   */
  status?: string;
  tags?: GetImageCacheResponseBodyTags[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      events: 'Events',
      imageCacheId: 'ImageCacheId',
      imageCacheName: 'ImageCacheName',
      images: 'Images',
      networkConfig: 'NetworkConfig',
      paymentType: 'PaymentType',
      readyTime: 'ReadyTime',
      regionId: 'RegionId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      size: 'Size',
      status: 'Status',
      tags: 'Tags',
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
      readyTime: 'string',
      regionId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      size: 'number',
      status: 'string',
      tags: { 'type': 'array', 'itemType': GetImageCacheResponseBodyTags },
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

