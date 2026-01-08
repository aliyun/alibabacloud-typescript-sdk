// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInstanceResponseBodyData extends $dara.Model {
  /**
   * @example
   * VIBER
   */
  channelType?: string;
  /**
   * @example
   * des
   */
  description?: string;
  /**
   * @example
   * des
   */
  instanceDescription?: string;
  /**
   * @example
   * 293992992
   */
  instanceId?: string;
  /**
   * @example
   * ins
   */
  instanceName?: string;
  /**
   * @example
   * 示例值示例值
   */
  resourceRegionId?: string;
  /**
   * @example
   * 2020-12-01 00:00:00
   */
  submitTime?: string;
  static names(): { [key: string]: string } {
    return {
      channelType: 'ChannelType',
      description: 'Description',
      instanceDescription: 'InstanceDescription',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      resourceRegionId: 'ResourceRegionId',
      submitTime: 'SubmitTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelType: 'string',
      description: 'string',
      instanceDescription: 'string',
      instanceId: 'string',
      instanceName: 'string',
      resourceRegionId: 'string',
      submitTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceResponseBody extends $dara.Model {
  /**
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: UpdateInstanceResponseBodyData;
  /**
   * @example
   * NULL
   */
  message?: string;
  /**
   * @example
   * 示例值示例值
   */
  requestId?: string;
  /**
   * @example
   * false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: UpdateInstanceResponseBodyData,
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

