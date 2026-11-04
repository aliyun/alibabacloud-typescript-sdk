// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { E2BNetwork } from "./E2bnetwork";
import { InnerSandboxRuntimeConfig } from "./InnerSandboxRuntimeConfig";
import { InnerCreateSandboxVolumeMounts } from "./InnerCreateSandboxVolumeMounts";


export class InnerCreateSandboxInput extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the sandbox is allowed to access external networks.
   * 
   * @example
   * true
   */
  allowInternetAccess?: boolean;
  /**
   * @remarks
   * Specifies whether to automatically pause after timeout.
   * 
   * @example
   * true
   */
  autoPause?: boolean;
  /**
   * @remarks
   * Specifies whether to automatically resume.
   * 
   * @example
   * true
   */
  autoResume?: boolean;
  /**
   * @remarks
   * The environment variable configuration.
   */
  envVars?: { [key: string]: string };
  /**
   * @remarks
   * The metadata configuration.
   */
  metadata?: { [key: string]: string };
  /**
   * @remarks
   * The network configuration.
   */
  network?: E2BNetwork;
  /**
   * @remarks
   * The runtime configuration.
   */
  runtime?: InnerSandboxRuntimeConfig;
  /**
   * @remarks
   * Specifies whether authentication is required to access the sandbox envd.
   * 
   * @example
   * true
   */
  secure?: boolean;
  /**
   * @remarks
   * The unique identifier of the team.
   * 
   * @example
   * 76eeecaa-****
   */
  teamID?: string;
  /**
   * @remarks
   * The unique identifier of the template.
   * 
   * @example
   * v9vjyzw64bsu83vw0dgs
   */
  templateID?: string;
  /**
   * @remarks
   * The timeout period. Unit: seconds.
   * 
   * @example
   * 180
   */
  timeout?: number;
  /**
   * @remarks
   * The volume mount configuration.
   */
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

