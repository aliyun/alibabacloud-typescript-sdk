// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMem0MemoryRequest extends $dara.Model {
  /**
   * @example
   * my-agent-space
   */
  agentSpace?: string;
  /**
   * @example
   * cs-0001
   */
  contextStoreId?: string;
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
  static names(): { [key: string]: string } {
    return {
      agentSpace: 'agentSpace',
      contextStoreId: 'context_store_id',
      orgId: 'org_id',
      projectId: 'project_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentSpace: 'string',
      contextStoreId: 'string',
      orgId: 'string',
      projectId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

