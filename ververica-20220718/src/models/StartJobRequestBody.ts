// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BriefResourceSetting } from "./BriefResourceSetting";
import { DeploymentRestoreStrategy } from "./DeploymentRestoreStrategy";


export class StartJobRequestBody extends $dara.Model {
  /**
   * @example
   * 5a19a71b-1c42-4f34-94fd-86cf60782c81
   */
  deploymentId?: string;
  resourceSettingSpec?: BriefResourceSetting;
  restoreStrategy?: DeploymentRestoreStrategy;
  static names(): { [key: string]: string } {
    return {
      deploymentId: 'deploymentId',
      resourceSettingSpec: 'resourceSettingSpec',
      restoreStrategy: 'restoreStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentId: 'string',
      resourceSettingSpec: BriefResourceSetting,
      restoreStrategy: DeploymentRestoreStrategy,
    };
  }

  validate() {
    if(this.resourceSettingSpec && typeof (this.resourceSettingSpec as any).validate === 'function') {
      (this.resourceSettingSpec as any).validate();
    }
    if(this.restoreStrategy && typeof (this.restoreStrategy as any).validate === 'function') {
      (this.restoreStrategy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

