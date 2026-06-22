// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInstanceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The channel type.
   * 
   * @example
   * VIBER
   */
  channelType?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * des
   */
  description?: string;
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
   * 293992992
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * ins
   */
  instanceName?: string;
  /**
   * @remarks
   * The ID of the region where the instance is located.
   * 
   * @example
   * example
   */
  resourceRegionId?: string;
  /**
   * @remarks
   * The time when the instance information was submitted.
   * 
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
   * @remarks
   * Details about why access was denied.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The status code of the response.
   * 
   * - `OK` indicates that the request was successful.
   * 
   * - For other error codes, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data object.
   */
  data?: UpdateInstanceResponseBodyData;
  /**
   * @remarks
   * The response message. If the request fails, this field contains error details.
   * 
   * @example
   * NULL
   */
  message?: string;
  /**
   * @remarks
   * The request ID. Use this ID to troubleshoot issues.
   * 
   * @example
   * example
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * - **true**: The request was successful.
   * 
   * - **false**: The request failed.
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

