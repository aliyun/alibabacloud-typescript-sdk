// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMemoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The agent ID of the application.
   * 
   * @example
   * test_user_001
   */
  agentId?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * test_user_001
   */
  appId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1751595283143
   */
  createdAt?: string;
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * 1751595283143
   */
  expirationDate?: string;
  /**
   * @remarks
   * The memory ID.
   * 
   * @example
   * 019ca1e5-7307-7d50-b943-5e628326a8ed
   */
  id?: string;
  /**
   * @remarks
   * The immutable properties.
   * 
   * @example
   * test
   */
  immutable?: string;
  /**
   * @remarks
   * The memory.
   * 
   * @example
   * My name is Zhang San and I live in Hangzhou.
   */
  memory?: string;
  /**
   * @remarks
   * The metadata.
   * 
   * @example
   * {"sessionId":"test_session_001"}
   */
  metadata?: string;
  /**
   * @remarks
   * The organization.
   * 
   * @example
   * test
   */
  organization?: string;
  /**
   * @remarks
   * The memory owner.
   * 
   * @example
   * test
   */
  owner?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8FDE2569-626B-5176-9844-28877A*****
   */
  requestId?: string;
  /**
   * @remarks
   * The run ID.
   * 
   * @example
   * test_user_001
   */
  runId?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 1744428159434
   */
  updatedAt?: string;
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
      createdAt: 'createdAt',
      expirationDate: 'expirationDate',
      id: 'id',
      immutable: 'immutable',
      memory: 'memory',
      metadata: 'metadata',
      organization: 'organization',
      owner: 'owner',
      requestId: 'requestId',
      runId: 'runId',
      updatedAt: 'updatedAt',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      appId: 'string',
      createdAt: 'string',
      expirationDate: 'string',
      id: 'string',
      immutable: 'string',
      memory: 'string',
      metadata: 'string',
      organization: 'string',
      owner: 'string',
      requestId: 'string',
      runId: 'string',
      updatedAt: 'string',
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

