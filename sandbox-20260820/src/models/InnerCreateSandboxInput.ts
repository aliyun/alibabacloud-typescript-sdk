// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { E2BNetwork } from "./E2bnetwork";
import { InnerSandboxRuntimeConfig } from "./InnerSandboxRuntimeConfig";
import { InnerCreateSandboxVolumeMounts } from "./InnerCreateSandboxVolumeMounts";


export class InnerCreateSandboxInput extends $dara.Model {
  /**
   * @example
   * true
   */
  allowInternetAccess?: boolean;
  /**
   * @example
   * true
   */
  autoPause?: boolean;
  /**
   * @example
   * true
   */
  autoResume?: boolean;
  envVars?: { [key: string]: string };
  metadata?: { [key: string]: string };
  network?: E2BNetwork;
  runtime?: InnerSandboxRuntimeConfig;
  /**
   * @example
   * true
   */
  secure?: boolean;
  /**
   * @example
   * 76eeecaa-****
   */
  teamID?: string;
  /**
   * @example
   * v9vjyzw64bsu83vw0dgs
   */
  templateID?: string;
  /**
   * @example
   * 180
   */
  timeout?: number;
  volumeMounts?: InnerCreateSandboxVolumeMounts;
  static names(): { [key: string]: string } {
    return {
      allowInternetAccess: 'allowInternetAccess',
      autoPause: 'autoPause',
      autoResume: 'autoResume',
      envVars: 'envVars',
      metadata: 'metadata',
      network: 'network',
      runtime: 'runtime',
      secure: 'secure',
      teamID: 'teamID',
      templateID: 'templateID',
      timeout: 'timeout',
      volumeMounts: 'volumeMounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowInternetAccess: 'boolean',
      autoPause: 'boolean',
      autoResume: 'boolean',
      envVars: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      network: E2BNetwork,
      runtime: InnerSandboxRuntimeConfig,
      secure: 'boolean',
      teamID: 'string',
      templateID: 'string',
      timeout: 'number',
      volumeMounts: InnerCreateSandboxVolumeMounts,
    };
  }

  validate() {
    if(this.envVars) {
      $dara.Model.validateMap(this.envVars);
    }
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    if(this.network && typeof (this.network as any).validate === 'function') {
      (this.network as any).validate();
    }
    if(this.runtime && typeof (this.runtime as any).validate === 'function') {
      (this.runtime as any).validate();
    }
    if(this.volumeMounts && typeof (this.volumeMounts as any).validate === 'function') {
      (this.volumeMounts as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

