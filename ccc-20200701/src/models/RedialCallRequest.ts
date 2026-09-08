// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RedialCallRequest extends $dara.Model {
  /**
   * @remarks
   * Callee number.
   * 
   * @example
   * 1318888****
   */
  callee?: string;
  /**
   * @remarks
   * Caller number.
   * 
   * @example
   * 0109810****
   */
  caller?: string;
  /**
   * @remarks
   * Unique ID provided by the agent endpoint to identify an agent Workbench.
   * 
   * @example
   * CCC-x.x.x.x-chrome102-bsdf911812c60f61e
   */
  deviceId?: string;
  /**
   * @remarks
   * Instance ID of the call center.
   * 
   * This parameter is required.
   * 
   * @example
   * abc
   */
  instanceId?: string;
  /**
   * @remarks
   * Call job ID. The job ID of the previous call used for redialing.
   * 
   * @example
   * job-6581536084722****
   */
  jobId?: string;
  /**
   * @remarks
   * Per-call data. It must not exceed 128 bytes and is primarily used for extension purposes. Ordinary customers do not need to pay attention to it.
   * 
   * @example
   * a=b
   */
  tags?: string;
  /**
   * @remarks
   * Timeout. If the call is not answered within the time specified by this parameter, it is automatically disconnected.
   * 
   * @example
   * 30
   */
  timeoutSeconds?: number;
  /**
   * @remarks
   * User ID of the agent.
   * 
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

