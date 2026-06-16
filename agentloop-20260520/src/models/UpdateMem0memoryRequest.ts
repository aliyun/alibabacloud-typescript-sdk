// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMem0MemoryRequest extends $dara.Model {
  /**
   * @example
   * my-agent-space
   */
  agentSpace?: string;
  /**
   * @example
   * {"text":"用户改成喜欢喝美式","metadata":{"channel":"app"}}
   */
  body?: { [key: string]: any };
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
      body: 'body',
      contextStoreId: 'context_store_id',
      orgId: 'org_id',
      projectId: 'project_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentSpace: 'string',
      body: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      contextStoreId: 'string',
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

