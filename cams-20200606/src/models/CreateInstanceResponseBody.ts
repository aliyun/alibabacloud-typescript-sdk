// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The channel type.
   * 
   * @example
   * example
   */
  channelType?: string;
  /**
   * @remarks
   * The instance description.
   * 
   * @example
   * des
   */
  instanceDescription?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 2999292
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * ins
   */
  instanceName?: number;
  /**
   * @remarks
   * The region to which the resource belongs.
   * 
   * @example
   * example
   */
  resourceRegionId?: string;
  /**
   * @remarks
   * The submission time.
   * 
   * @example
   * example
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
  /**
   * @remarks
   * The details of the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The status code. A value of 200 indicates success.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: CreateInstanceResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * NULL
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2992939*****
   */
  requestId?: string;
  /**
   * @remarks
   * Specifies whether the request is successful. Valid values:
   * - true: The request is successful.
   * - false: The request fails.
   * 
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

