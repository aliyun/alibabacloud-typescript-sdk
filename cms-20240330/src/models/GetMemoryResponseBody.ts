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
   * @example
   * 1751595283143
   */
  createdAt?: string;
  /**
   * @example
   * 1751595283143
   */
  expirationDate?: string;
  /**
   * @example
   * 019ca1e5-7307-7d50-b943-5e628326a8ed
   */
  id?: string;
  /**
   * @example
   * test
   */
  immutable?: string;
  /**
   * @example
   * My name is Zhang San and I live in Hangzhou.
   */
  memory?: string;
  /**
   * @example
   * {"sessionId":"test_session_001"}
   */
  metadata?: string;
  /**
   * @example
   * test
   */
  organization?: string;
  /**
   * @example
   * test
   */
  owner?: string;
  /**
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

