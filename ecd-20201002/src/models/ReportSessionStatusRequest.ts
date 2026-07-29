// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReportSessionStatusRequest extends $dara.Model {
  /**
   * @remarks
   * End user.
   * 
   * @example
   * liming
   */
  endUserId?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp167fcodoa90ixn****
   */
  instanceId?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * Duration of the session change.
   * 
   * This parameter is required.
   * 
   * @example
   * 1642909143781
   */
  sessionChangeTime?: number;
  /**
   * @remarks
   * Session ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  sessionId?: string;
  /**
   * @remarks
   * Session status.
   * 
   * This parameter is required.
   * 
   * @example
   * SessionLogOn
   */
  sessionStatus?: string;
  static names(): { [key: string]: string } {
    return {
      endUserId: 'EndUserId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      sessionChangeTime: 'SessionChangeTime',
      sessionId: 'SessionId',
      sessionStatus: 'SessionStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endUserId: 'string',
      instanceId: 'string',
      regionId: 'string',
      sessionChangeTime: 'number',
      sessionId: 'string',
      sessionStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

