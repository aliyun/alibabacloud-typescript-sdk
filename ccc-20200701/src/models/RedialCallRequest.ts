// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RedialCallRequest extends $dara.Model {
  /**
   * @example
   * 1318888****
   */
  callee?: string;
  /**
   * @example
   * 0109810****
   */
  caller?: string;
  deviceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * abc
   */
  instanceId?: string;
  /**
   * @example
   * job-6581536084722****
   */
  jobId?: string;
  /**
   * @example
   * a=b
   */
  tags?: string;
  /**
   * @example
   * 30
   */
  timeoutSeconds?: number;
  /**
   * @example
   * samzhang@abc
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      callee: 'Callee',
      caller: 'Caller',
      deviceId: 'DeviceId',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      tags: 'Tags',
      timeoutSeconds: 'TimeoutSeconds',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callee: 'string',
      caller: 'string',
      deviceId: 'string',
      instanceId: 'string',
      jobId: 'string',
      tags: 'string',
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

