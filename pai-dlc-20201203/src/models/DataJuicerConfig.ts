// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ResourceLimit } from "./ResourceLimit";


export class DataJuicerConfig extends $dara.Model {
  /**
   * @remarks
   * The command type. Valid values:
   * 
   * - shell: shell command.
   * - config: DataJuicer YAML configuration.
   * 
   * @example
   * config
   */
  commandType?: string;
  /**
   * @remarks
   * Specifies whether to enable resource estimation. When resource estimation is enabled, the execution mode must be distributed, and the command type must be config (DataJuicer YAML configuration).
   * 
   * @example
   * true
   */
  enableResourceEstimation?: boolean;
  /**
   * @remarks
   * The execution mode. Valid values:
   * 
   * - standalone: single-node.
   * - distributed: distributed.
   * 
   * @example
   * standalone
   */
  executionMode?: string;
  /**
   * @remarks
   * The resource estimation limit. This parameter takes effect only when resource estimation is enabled.
   */
  resourceLimit?: ResourceLimit;
  static names(): { [key: string]: string } {
    return {
      commandType: 'CommandType',
      enableResourceEstimation: 'EnableResourceEstimation',
      executionMode: 'ExecutionMode',
      resourceLimit: 'ResourceLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandType: 'string',
      enableResourceEstimation: 'boolean',
      executionMode: 'string',
      resourceLimit: ResourceLimit,
    };
  }

  validate() {
    if(this.resourceLimit && typeof (this.resourceLimit as any).validate === 'function') {
      (this.resourceLimit as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

