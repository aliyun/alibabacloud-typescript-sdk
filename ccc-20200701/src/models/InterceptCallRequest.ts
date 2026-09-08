// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InterceptCallRequest extends $dara.Model {
  /**
   * @remarks
   * Device ID. This parameter is meaningless and can be filled in with any value.
   * 
   * @example
   * device
   */
  deviceId?: string;
  /**
   * @remarks
   * 实例 ID。
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * The agent ID that is forcibly disconnected.
   * 
   * This parameter is required.
   * 
   * @example
   * agent2@ccc-test
   */
  interceptedUserId?: string;
  /**
   * @remarks
   * The call ID.
   * 
   * This parameter is required.
   * 
   * @example
   * job-6538214103685****
   */
  jobId?: string;
  /**
   * @remarks
   * 强拆超时时间，经过指定的时间强拆仍未成功，则取消强拆，正常情况下，强拆操作会马上成功，设置超时时间是为了防止异常发生，此字段选填，默认 30，单位秒。
   * 
   * @example
   * 60
   */
  timeoutSeconds?: number;
  /**
   * @remarks
   * 发起强拆的坐席。
   * 
   * @example
   * agent@ccc-test
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      instanceId: 'InstanceId',
      interceptedUserId: 'InterceptedUserId',
      jobId: 'JobId',
      timeoutSeconds: 'TimeoutSeconds',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      instanceId: 'string',
      interceptedUserId: 'string',
      jobId: 'string',
      timeoutSeconds: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

