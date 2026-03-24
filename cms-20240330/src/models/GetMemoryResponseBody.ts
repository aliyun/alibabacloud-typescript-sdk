// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMemoryResponseBody extends $dara.Model {
  /**
   * @example
   * test_user_001
   */
  agentId?: string;
  /**
   * @example
   * test_user_001
   */
  appId?: string;
  /**
   * @remarks
   * The time when the memory was created.
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
   * This property is mutable.
   * 
   * @example
   * test
   */
  immutable?: string;
  /**
   * @remarks
   * The memory content.
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
   * The owner of the memory.
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
   * @example
   * test_user_001
   */
  runId?: string;
  /**
   * @remarks
   * The time when the memory was last updated.
   * 
   * @example
   * 1744428159434
   */
  updatedAt?: string;
  /**
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

