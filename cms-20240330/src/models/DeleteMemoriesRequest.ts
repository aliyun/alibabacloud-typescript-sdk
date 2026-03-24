// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMemoriesRequest extends $dara.Model {
  /**
   * @remarks
   * The agent ID of the application.
   * 
   * @example
   * 952730733889060865
   */
  agentId?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * 98ea19fe-128b-4841-b318-0359bec3c65d
   */
  appId?: string;
  /**
   * @remarks
   * The run ID.
   * 
   * @example
   * jr-dd7c645fd6fe50d4
   */
  runId?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * test_user_001
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      appId: 'appId',
      runId: 'runId',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      appId: 'string',
      runId: 'string',
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

