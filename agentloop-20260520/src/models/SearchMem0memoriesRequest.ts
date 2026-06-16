// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchMem0MemoriesRequest extends $dara.Model {
  /**
   * @example
   * my-agent-space
   */
  agentSpace?: string;
  /**
   * @example
   * {"query":"用户喝什么","filters":{"AND":[{"user_id":"alice"}]},"top_k":5}
   */
  body?: { [key: string]: any };
  /**
   * @example
   * cs-0001
   */
  contextStoreId?: string;
  /**
   * @example
   * false
   */
  enableGraph?: boolean;
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
      body: 'body',
      contextStoreId: 'context_store_id',
      enableGraph: 'enable_graph',
      orgId: 'org_id',
      projectId: 'project_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentSpace: 'string',
      body: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      contextStoreId: 'string',
      enableGraph: 'boolean',
      orgId: 'string',
      projectId: 'string',
    };
  }

  validate() {
    if(this.body) {
      $dara.Model.validateMap(this.body);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

