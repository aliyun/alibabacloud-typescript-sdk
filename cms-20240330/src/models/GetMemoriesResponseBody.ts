// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMemoriesResponseBodyRelations extends $dara.Model {
  /**
   * @remarks
   * Destination
   * 
   * @example
   * test
   */
  destination?: string;
  /**
   * @remarks
   * Relation
   * 
   * @example
   * test
   */
  relationship?: string;
  /**
   * @remarks
   * Source
   * 
   * @example
   * test_namespace/RegistryModule-test2153b9f3-0be6-455e-9efd-05fd31f62885/alicloud
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      destination: 'destination',
      relationship: 'relationship',
      source: 'source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destination: 'string',
      relationship: 'string',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMemoriesResponseBodyResults extends $dara.Model {
  /**
   * @remarks
   * Actor ID
   * 
   * @example
   * test_session_001
   */
  actorId?: string;
  /**
   * @remarks
   * Agent ID of the application
   * 
   * @example
   * 980565235819266048
   */
  agentId?: string;
  /**
   * @example
   * test_user_001
   */
  appId?: string;
  /**
   * @remarks
   * Creation time
   * 
   * @example
   * 1747623093939
   */
  createdAt?: string;
  /**
   * @remarks
   * Memory hash value
   * 
   * @example
   * 73ad89f2d56c2f8615e5dd0cef7b4c41c074277c91fa0e31fc5b41802c0481f2
   */
  hash?: string;
  /**
   * @remarks
   * Memory ID
   * 
   * @example
   * 019ca1e5-7307-7d50-b943-5e628326a8ed
   */
  id?: string;
  /**
   * @remarks
   * Memory
   * 
   * @example
   * My name is Zhang San and I live in Hangzhou.
   */
  memory?: string;
  /**
   * @remarks
   * Metadata
   * 
   * @example
   * {"sessionId":"test_session_001"}
   */
  metadata?: { [key: string]: any };
  /**
   * @remarks
   * Message initiator role
   * 
   * @example
   * user
   */
  role?: string;
  /**
   * @remarks
   * Run ID
   * 
   * @example
   * jr-965a0b00cb42a43b
   */
  runId?: string;
  /**
   * @remarks
   * Similarity score
   * 
   * @example
   * 30.12
   */
  score?: number;
  /**
   * @remarks
   * Update time
   * 
   * @example
   * 1752825865045
   */
  updatedAt?: string;
  /**
   * @remarks
   * User ID
   * 
   * @example
   * test_session_001
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      actorId: 'actorId',
      agentId: 'agentId',
      appId: 'appId',
      createdAt: 'createdAt',
      hash: 'hash',
      id: 'id',
      memory: 'memory',
      metadata: 'metadata',
      role: 'role',
      runId: 'runId',
      score: 'score',
      updatedAt: 'updatedAt',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actorId: 'string',
      agentId: 'string',
      appId: 'string',
      createdAt: 'string',
      hash: 'string',
      id: 'string',
      memory: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      role: 'string',
      runId: 'string',
      score: 'number',
      updatedAt: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMemoriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Relations
   */
  relations?: GetMemoriesResponseBodyRelations[];
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 8FDE2569-626B-5176-9844-28877A*****
   */
  requestId?: string;
  /**
   * @remarks
   * Return value
   */
  results?: GetMemoriesResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      relations: 'relations',
      requestId: 'requestId',
      results: 'results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      relations: { 'type': 'array', 'itemType': GetMemoriesResponseBodyRelations },
      requestId: 'string',
      results: { 'type': 'array', 'itemType': GetMemoriesResponseBodyResults },
    };
  }

  validate() {
    if(Array.isArray(this.relations)) {
      $dara.Model.validateArray(this.relations);
    }
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

