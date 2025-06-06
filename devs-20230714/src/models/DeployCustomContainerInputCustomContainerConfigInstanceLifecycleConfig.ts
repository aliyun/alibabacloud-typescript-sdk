// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeployCustomContainerInputCustomContainerConfigInstanceLifecycleConfigInitializer } from "./DeployCustomContainerInputCustomContainerConfigInstanceLifecycleConfigInitializer";
import { DeployCustomContainerInputCustomContainerConfigInstanceLifecycleConfigPreStop } from "./DeployCustomContainerInputCustomContainerConfigInstanceLifecycleConfigPreStop";


export class DeployCustomContainerInputCustomContainerConfigInstanceLifecycleConfig extends $dara.Model {
  initializer?: DeployCustomContainerInputCustomContainerConfigInstanceLifecycleConfigInitializer;
  preStop?: DeployCustomContainerInputCustomContainerConfigInstanceLifecycleConfigPreStop;
  static names(): { [key: string]: string } {
    return {
      initializer: 'initializer',
      preStop: 'preStop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      initializer: DeployCustomContainerInputCustomContainerConfigInstanceLifecycleConfigInitializer,
      preStop: DeployCustomContainerInputCustomContainerConfigInstanceLifecycleConfigPreStop,
    };
  }

  validate() {
    if(this.initializer && typeof (this.initializer as any).validate === 'function') {
      (this.initializer as any).validate();
    }
    if(this.preStop && typeof (this.preStop as any).validate === 'function') {
      (this.preStop as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

