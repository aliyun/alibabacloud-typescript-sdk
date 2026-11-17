// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAgentInstanceMemoryConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The list of agent instance IDs. You can specify 1 to 100 IDs, and the IDs must be unique. Each instance must belong to the current account, support memory management, and have the memory feature configured.
   */
  agentInstanceIds?: string[];
  /**
   * @remarks
   * Required. Specifies whether to enable the memory feature. Valid values:
   * - true: Enables the memory feature.
   * - false: Disables the memory feature.
   * Before you enable the feature, ensure that the tenant-level memory store is enabled.
   */
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      agentInstanceIds: 'AgentInstanceIds',
      enabled: 'Enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentInstanceIds: { 'type': 'array', 'itemType': 'string' },
      enabled: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.agentInstanceIds)) {
      $dara.Model.validateArray(this.agentInstanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

