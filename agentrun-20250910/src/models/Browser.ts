// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NetworkConfiguration } from "./NetworkConfiguration";
import { BrowserRecordingConfiguration } from "./BrowserRecordingConfiguration";


export class Browser extends $dara.Model {
  browserId?: string;
  browserName?: string;
  cpu?: number;
  createdAt?: string;
  credentialId?: string;
  description?: string;
  executionRoleArn?: string;
  lastUpdatedAt?: string;
  /**
   * @remarks
   * 内存资源配置（单位：MB）
   */
  memory?: number;
  networkConfiguration?: NetworkConfiguration;
  recording?: BrowserRecordingConfiguration;
  status?: string;
  /**
   * @remarks
   * 当前状态的原因说明（如适用）
   */
  statusReason?: string;
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

