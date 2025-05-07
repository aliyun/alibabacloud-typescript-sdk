// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RevisionConfig } from "./RevisionConfig";
import { WebNetworkConfig } from "./WebNetworkConfig";
import { WebScalingConfig } from "./WebScalingConfig";
import { WebTrafficConfig } from "./WebTrafficConfig";


export class CreateWebApplicationInput extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sae-app
   */
  applicationName?: string;
  /**
   * @example
   * my sae app
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  revisionConfig?: RevisionConfig;
  webNetworkConfig?: WebNetworkConfig;
  webScalingConfig?: WebScalingConfig;
  webTrafficConfig?: WebTrafficConfig;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      description: 'Description',
      revisionConfig: 'RevisionConfig',
      webNetworkConfig: 'WebNetworkConfig',
      webScalingConfig: 'WebScalingConfig',
      webTrafficConfig: 'WebTrafficConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      description: 'string',
      revisionConfig: RevisionConfig,
      webNetworkConfig: WebNetworkConfig,
      webScalingConfig: WebScalingConfig,
      webTrafficConfig: WebTrafficConfig,
    };
  }

  validate() {
    if(this.revisionConfig && typeof (this.revisionConfig as any).validate === 'function') {
      (this.revisionConfig as any).validate();
    }
    if(this.webNetworkConfig && typeof (this.webNetworkConfig as any).validate === 'function') {
      (this.webNetworkConfig as any).validate();
    }
    if(this.webScalingConfig && typeof (this.webScalingConfig as any).validate === 'function') {
      (this.webScalingConfig as any).validate();
    }
    if(this.webTrafficConfig && typeof (this.webTrafficConfig as any).validate === 'function') {
      (this.webTrafficConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

