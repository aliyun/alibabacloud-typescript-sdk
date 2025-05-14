// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FixNodePoolVulsRequestRolloutPolicy } from "./FixNodePoolVulsRequestRolloutPolicy";


export class FixNodePoolVulsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow the nodes to restart.
   * 
   * @example
   * true
   */
  autoRestart?: boolean;
  /**
   * @remarks
   * The names of the nodes to be patched.
   */
  nodes?: string[];
  /**
   * @remarks
   * The batch patching policy.
   */
  rolloutPolicy?: FixNodePoolVulsRequestRolloutPolicy;
  /**
   * @remarks
   * The list of vulnerabilities.
   */
  vuls?: string[];
  static names(): { [key: string]: string } {
    return {
      autoRestart: 'auto_restart',
      nodes: 'nodes',
      rolloutPolicy: 'rollout_policy',
      vuls: 'vuls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRestart: 'boolean',
      nodes: { 'type': 'array', 'itemType': 'string' },
      rolloutPolicy: FixNodePoolVulsRequestRolloutPolicy,
      vuls: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    if(this.rolloutPolicy && typeof (this.rolloutPolicy as any).validate === 'function') {
      (this.rolloutPolicy as any).validate();
    }
    if(Array.isArray(this.vuls)) {
      $dara.Model.validateArray(this.vuls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

