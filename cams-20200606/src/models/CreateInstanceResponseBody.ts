// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceResponseBodyData extends $dara.Model {
  /**
   * @example
   * 示例值
   */
  channelType?: string;
  /**
   * @example
   * des
   */
  instanceDescription?: string;
  /**
   * @example
   * 2999292
   */
  instanceId?: string;
  /**
   * @example
   * ins
   */
  instanceName?: number;
  /**
   * @example
   * 示例值示例值
   */
  resourceRegionId?: string;
  /**
   * @example
   * 示例值
   */
  submitTime?: string;
  static names(): { [key: string]: string } {
    return {
      channelType: 'ChannelType',
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
      instanceDescription: 'string',
      instanceId: 'string',
      instanceName: 'number',
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

export class CreateInstanceResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: CreateInstanceResponseBodyData;
  /**
   * @example
   * NULL
   */
  message?: string;
  /**
   * @example
   * 2992939*****
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
      data: CreateInstanceResponseBodyData,
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

