// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EnvironmentSnapshot } from "./EnvironmentSnapshot";
import { EnvironmentChanges } from "./EnvironmentChanges";
import { EnvironmentStagedConfigs } from "./EnvironmentStagedConfigs";
import { WebhookCodeContext } from "./WebhookCodeContext";


export class EnvironmentDeploymentSpec extends $dara.Model {
  baseline?: EnvironmentSnapshot;
  changes?: EnvironmentChanges;
  /**
   * @example
   * false
   */
  skipRemoveResources?: boolean;
  target?: EnvironmentStagedConfigs;
  webhookCodeContext?: WebhookCodeContext;
  static names(): { [key: string]: string } {
    return {
      baseline: 'baseline',
      changes: 'changes',
      skipRemoveResources: 'skipRemoveResources',
      target: 'target',
      webhookCodeContext: 'webhookCodeContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseline: EnvironmentSnapshot,
      changes: EnvironmentChanges,
      skipRemoveResources: 'boolean',
      target: EnvironmentStagedConfigs,
      webhookCodeContext: WebhookCodeContext,
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
    if(this.webhookCodeContext && typeof (this.webhookCodeContext as any).validate === 'function') {
      (this.webhookCodeContext as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

