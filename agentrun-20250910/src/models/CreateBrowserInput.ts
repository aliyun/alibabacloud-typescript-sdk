// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NetworkConfiguration } from "./NetworkConfiguration";


export class CreateBrowserInput extends $dara.Model {
  /**
   * @remarks
   * The name of the browser.
   * 
   * This parameter is required.
   * 
   * @example
   * my-browser
   */
  browserName?: string;
  /**
   * @remarks
   * The CPU cores to allocate to the browser instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 2.0
   */
  cpu?: number;
  /**
   * @remarks
   * The credential ID used for authentication.
   * 
   * @example
   * cred-1234567890abcdef
   */
  credentialId?: string;
  /**
   * @remarks
   * A description of the browser instance.
   * 
   * @example
   * Web automation browser for testing
   */
  description?: string;
  /**
   * @remarks
   * The ARN of the execution role.
   * 
   * @example
   * acs:ram::1760720386195983:role/BrowserExecutionRole
   */
  executionRoleArn?: string;
  /**
   * @remarks
   * The memory (in MB) to allocate to the browser instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 2048
   */
  memory?: number;
  /**
   * @remarks
   * The network configuration for the browser instance.
   * 
   * This parameter is required.
   */
  networkConfiguration?: NetworkConfiguration;
  /**
   * @remarks
   * The idle time in seconds before a session expires. When a session is idle, the instance enters an idle billing mode.
   * 
   * @example
   * 3600
   */
  sessionIdleTimeoutSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      browserName: 'browserName',
      cpu: 'cpu',
      credentialId: 'credentialId',
      description: 'description',
      executionRoleArn: 'executionRoleArn',
      memory: 'memory',
      networkConfiguration: 'networkConfiguration',
      sessionIdleTimeoutSeconds: 'sessionIdleTimeoutSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      browserName: 'string',
      cpu: 'number',
      credentialId: 'string',
      description: 'string',
      executionRoleArn: 'string',
      memory: 'number',
      networkConfiguration: NetworkConfiguration,
      sessionIdleTimeoutSeconds: 'number',
    };
  }

  validate() {
    if(this.networkConfiguration && typeof (this.networkConfiguration as any).validate === 'function') {
      (this.networkConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

