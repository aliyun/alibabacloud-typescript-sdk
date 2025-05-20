// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKillInstanceSessionTaskWithMaintainUserRequest extends $dara.Model {
  ignoredUsers?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  killAllSessions?: boolean;
  nodeId?: string;
  sessionIds?: string;
  static names(): { [key: string]: string } {
    return {
      ignoredUsers: 'IgnoredUsers',
      instanceId: 'InstanceId',
      killAllSessions: 'KillAllSessions',
      nodeId: 'NodeId',
      sessionIds: 'SessionIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ignoredUsers: 'string',
      instanceId: 'string',
      killAllSessions: 'boolean',
      nodeId: 'string',
      sessionIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

