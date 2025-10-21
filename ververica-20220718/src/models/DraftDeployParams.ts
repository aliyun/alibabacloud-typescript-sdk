// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BriefDeploymentTarget } from "./BriefDeploymentTarget";


export class DraftDeployParams extends $dara.Model {
  deploymentDraftId?: string;
  deploymentTarget?: BriefDeploymentTarget;
  /**
   * @example
   * false
   */
  skipValidate?: boolean;
  static names(): { [key: string]: string } {
    return {
      deploymentDraftId: 'deploymentDraftId',
      deploymentTarget: 'deploymentTarget',
      skipValidate: 'skipValidate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentDraftId: 'string',
      deploymentTarget: BriefDeploymentTarget,
      skipValidate: 'boolean',
    };
  }

  validate() {
    if(this.deploymentTarget && typeof (this.deploymentTarget as any).validate === 'function') {
      (this.deploymentTarget as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

