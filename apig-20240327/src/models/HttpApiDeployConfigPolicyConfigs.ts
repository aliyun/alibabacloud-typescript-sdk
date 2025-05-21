// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HttpApiDeployConfigPolicyConfigsAiFallbackConfig } from "./HttpApiDeployConfigPolicyConfigsAiFallbackConfig";


export class HttpApiDeployConfigPolicyConfigs extends $dara.Model {
  aiFallbackConfig?: HttpApiDeployConfigPolicyConfigsAiFallbackConfig;
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @example
   * AiFallback
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aiFallbackConfig: 'aiFallbackConfig',
      enable: 'enable',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiFallbackConfig: HttpApiDeployConfigPolicyConfigsAiFallbackConfig,
      enable: 'boolean',
      type: 'string',
    };
  }

  validate() {
    if(this.aiFallbackConfig && typeof (this.aiFallbackConfig as any).validate === 'function') {
      (this.aiFallbackConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

