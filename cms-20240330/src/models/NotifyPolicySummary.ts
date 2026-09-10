// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NotifyStrategyDetail } from "./NotifyStrategyDetail";


export class NotifyPolicySummary extends $dara.Model {
  /**
   * @remarks
   * The creation time, represented as a UNIX millisecond timestamp string.
   * 
   * @example
   * 1700000000000
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the notification policy.
   * 
   * @example
   * A notification policy for testing
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the notification policy is enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The Policy Name of the notification policy.
   * 
   * @example
   * Sample notification policy
   */
  name?: string;
  /**
   * @remarks
   * The configuration details of the notification policy.
   */
  notifyStrategy?: NotifyStrategyDetail;
  /**
   * @remarks
   * The update time, represented as a UNIX millisecond timestamp string.
   * 
   * @example
   * 1700000000000
   */
  updateTime?: string;
  /**
   * @remarks
   * The Alibaba Cloud account UID.
   * 
   * @example
   * 1234567890
   */
  userId?: string;
  /**
   * @remarks
   * The unique identifier of the notification policy.
   * 
   * @example
   * ns-uuid-001
   */
  uuid?: string;
  /**
   * @remarks
   * The version number of the notification policy.
   * 
   * @example
   * 1
   */
  version?: number;
  /**
   * @remarks
   * The workspace identifier.
   * 
   * @example
   * default
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      enabled: 'enabled',
      name: 'name',
      notifyStrategy: 'notifyStrategy',
      updateTime: 'updateTime',
      userId: 'userId',
      uuid: 'uuid',
      version: 'version',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      enabled: 'boolean',
      name: 'string',
      notifyStrategy: NotifyStrategyDetail,
      updateTime: 'string',
      userId: 'string',
      uuid: 'string',
      version: 'number',
      workspace: 'string',
    };
  }

  validate() {
    if(this.notifyStrategy && typeof (this.notifyStrategy as any).validate === 'function') {
      (this.notifyStrategy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

