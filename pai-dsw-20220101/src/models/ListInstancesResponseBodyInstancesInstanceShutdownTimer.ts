// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesResponseBodyInstancesInstanceShutdownTimer extends $dara.Model {
  /**
   * @remarks
   * The scheduled stop time.
   * 
   * @example
   * 2021-01-12T14:36:01Z
   */
  dueTime?: string;
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time when the instance was modified.
   * 
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * dsw-730xxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The remaining time before the instance is stopped.
   * 
   * @example
   * 3600000
   */
  remainingTimeInMs?: number;
  static names(): { [key: string]: string } {
    return {
      dueTime: 'DueTime',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      instanceId: 'InstanceId',
      remainingTimeInMs: 'RemainingTimeInMs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dueTime: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      instanceId: 'string',
      remainingTimeInMs: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

