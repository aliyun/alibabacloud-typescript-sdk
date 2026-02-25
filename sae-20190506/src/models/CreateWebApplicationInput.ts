// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RevisionConfig } from "./RevisionConfig";
import { WebNetworkConfig } from "./WebNetworkConfig";
import { WebScalingConfig } from "./WebScalingConfig";
import { WebTrafficConfig } from "./WebTrafficConfig";


export class CreateWebApplicationInput extends $dara.Model {
  /**
   * @remarks
   * The name of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * sae-app
   */
  applicationName?: string;
  /**
   * @remarks
   * The description of the application.
   * 
   * @example
   * my sae app
   */
  description?: string;
  /**
   * @remarks
   * The configuration on the application revision.
   * 
   * This parameter is required.
   */
  revisionConfig?: RevisionConfig;
  /**
   * @remarks
   * The network configurations.
   * 
   * >  This field is used to configure network for the application.
   */
  webNetworkConfig?: WebNetworkConfig;
  /**
   * @remarks
   * The scaling configurations of the applications.
   */
  webScalingConfig?: WebScalingConfig;
  /**
   * @remarks
   * The traffic configurations of the applications.
   */
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

