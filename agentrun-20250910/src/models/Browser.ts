// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NetworkConfiguration } from "./NetworkConfiguration";
import { BrowserRecordingConfiguration } from "./BrowserRecordingConfiguration";


export class Browser extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the browser.
   * 
   * @example
   * browser-1234567890abcdef
   */
  browserId?: string;
  /**
   * @remarks
   * The name of the browser.
   * 
   * @example
   * my-browser
   */
  browserName?: string;
  /**
   * @remarks
   * The number of CPU cores allocated to the browser.
   * 
   * @example
   * 2.0
   */
  cpu?: number;
  /**
   * @remarks
   * The time the browser was created, in ISO 8601 format.
   * 
   * @example
   * 2025-01-10T10:30:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The unique identifier for the credential associated with the browser.
   * 
   * @example
   * cred-1234567890abcdef
   */
  credentialId?: string;
  /**
   * @remarks
   * A user-defined description for the browser.
   * 
   * @example
   * Web automation browser for testing
   */
  description?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the execution role used by the browser.
   * 
   * @example
   * acs:ram::1760720386195983:role/BrowserExecutionRole
   */
  executionRoleArn?: string;
  /**
   * @remarks
   * The time the browser was last updated, in ISO 8601 format.
   * 
   * @example
   * 2025-01-10T11:45:00Z
   */
  lastUpdatedAt?: string;
  /**
   * @remarks
   * The memory allocated to the browser, in megabytes (MB).
   * 
   * @example
   * 2048
   */
  memory?: number;
  /**
   * @remarks
   * The network configuration for the browser.
   */
  networkConfiguration?: NetworkConfiguration;
  /**
   * @remarks
   * The recording configuration for the browser.
   */
  recording?: BrowserRecordingConfiguration;
  /**
   * @remarks
   * The current status of the browser.
   * 
   * @example
   * READY
   */
  status?: string;
  /**
   * @remarks
   * The reason for the current status, if any.
   * 
   * @example
   * Browser is ready for use
   */
  statusReason?: string;
  /**
   * @remarks
   * The unique identifier of the tenant that owns the browser.
   * 
   * @example
   * tenant-1234567890abcdef
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      browserId: 'browserId',
      browserName: 'browserName',
      cpu: 'cpu',
      createdAt: 'createdAt',
      credentialId: 'credentialId',
      description: 'description',
      executionRoleArn: 'executionRoleArn',
      lastUpdatedAt: 'lastUpdatedAt',
      memory: 'memory',
      networkConfiguration: 'networkConfiguration',
      recording: 'recording',
      status: 'status',
      statusReason: 'statusReason',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      browserId: 'string',
      browserName: 'string',
      cpu: 'number',
      createdAt: 'string',
      credentialId: 'string',
      description: 'string',
      executionRoleArn: 'string',
      lastUpdatedAt: 'string',
      memory: 'number',
      networkConfiguration: NetworkConfiguration,
      recording: BrowserRecordingConfiguration,
      status: 'string',
      statusReason: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    if(this.networkConfiguration && typeof (this.networkConfiguration as any).validate === 'function') {
      (this.networkConfiguration as any).validate();
    }
    if(this.recording && typeof (this.recording as any).validate === 'function') {
      (this.recording as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

