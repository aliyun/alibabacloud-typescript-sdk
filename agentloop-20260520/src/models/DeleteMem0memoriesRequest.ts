// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMem0MemoriesRequest extends $dara.Model {
  /**
   * @example
   * my-agent-space
   */
  agentSpace?: string;
  /**
   * @example
   * agent-001
   */
  agentId?: string;
  /**
   * @example
   * app-001
   */
  appId?: string;
  /**
   * @example
   * cs-0001
   */
  contextStoreId?: string;
  /**
   * @example
   * {"channel":"app","locale":"zh-CN"}
   */
  metadata?: { [key: string]: any };
  /**
   * @example
   * org-001
   */
  orgId?: string;
  /**
   * @example
   * proj-001
   */
  projectId?: string;
  /**
   * @example
   * run-001
   */
  runId?: string;
  /**
   * @example
   * alice
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      agentSpace: 'agentSpace',
      agentId: 'agent_id',
      appId: 'app_id',
      contextStoreId: 'context_store_id',
      metadata: 'metadata',
      orgId: 'org_id',
      projectId: 'project_id',
      runId: 'run_id',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentSpace: 'string',
      agentId: 'string',
      appId: 'string',
      contextStoreId: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      orgId: 'string',
      projectId: 'string',
      runId: 'string',
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

