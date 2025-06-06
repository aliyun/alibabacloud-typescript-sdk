// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ServiceBaseline } from "./ServiceBaseline";
import { ServiceChanges } from "./ServiceChanges";


export class ServiceDeploymentSpec extends $dara.Model {
  baseline?: ServiceBaseline;
  changes?: ServiceChanges;
  /**
   * @example
   * false
   */
  skipRemoveResources?: boolean;
  target?: ServiceBaseline;
  static names(): { [key: string]: string } {
    return {
      baseline: 'baseline',
      changes: 'changes',
      skipRemoveResources: 'skipRemoveResources',
      target: 'target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseline: ServiceBaseline,
      changes: ServiceChanges,
      skipRemoveResources: 'boolean',
      target: ServiceBaseline,
    };
  }

  validate() {
    if(this.baseline && typeof (this.baseline as any).validate === 'function') {
      (this.baseline as any).validate();
    }
    if(this.changes && typeof (this.changes as any).validate === 'function') {
      (this.changes as any).validate();
    }
    if(this.target && typeof (this.target as any).validate === 'function') {
      (this.target as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

