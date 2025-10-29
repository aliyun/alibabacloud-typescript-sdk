// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NetworkConfiguration } from "./NetworkConfiguration";
import { BrowserRecordingConfiguration } from "./BrowserRecordingConfiguration";


export class Browser extends $dara.Model {
  /**
   * @example
   * browser-1234567890abcdef
   */
  browserId?: string;
  /**
   * @example
   * my-browser
   */
  browserName?: string;
  /**
   * @example
   * 2.0
   */
  cpu?: number;
  /**
   * @example
   * 2025-01-10T10:30:00Z
   */
  createdAt?: string;
  /**
   * @example
   * cred-1234567890abcdef
   */
  credentialId?: string;
  /**
   * @example
   * Web automation browser for testing
   */
  description?: string;
  /**
   * @example
   * acs:ram::1760720386195983:role/BrowserExecutionRole
   */
  executionRoleArn?: string;
  /**
   * @example
   * 2025-01-10T11:45:00Z
   */
  lastUpdatedAt?: string;
  /**
   * @remarks
   * 内存资源配置（单位：MB）
   * 
   * @example
   * 2048
   */
  memory?: number;
  networkConfiguration?: NetworkConfiguration;
  recording?: BrowserRecordingConfiguration;
  /**
   * @example
   * READY
   */
  status?: string;
  /**
   * @remarks
   * 当前状态的原因说明（如适用）
   * 
   * @example
   * Browser is ready for use
   */
  statusReason?: string;
  /**
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

