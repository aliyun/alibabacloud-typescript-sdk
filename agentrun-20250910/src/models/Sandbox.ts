// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Sandbox extends $dara.Model {
  sandboxIdleTTLInSeconds?: number;
  /**
   * @remarks
   * 沙箱创建时间
   * 
   * This parameter is required.
   */
  createdAt?: string;
  endedAt?: string;
  /**
   * @remarks
   * 最后更新时间
   */
  lastUpdatedAt?: string;
  metadata?: { [key: string]: any };
  sandboxArn?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sandboxId?: string;
  /**
   * @remarks
   * 沙箱空闲超时时间（秒）
   */
  sandboxIdleTimeoutSeconds?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  status?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  templateId?: string;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      sandboxIdleTTLInSeconds: 'SandboxIdleTTLInSeconds',
      createdAt: 'createdAt',
      endedAt: 'endedAt',
      lastUpdatedAt: 'lastUpdatedAt',
      metadata: 'metadata',
      sandboxArn: 'sandboxArn',
      sandboxId: 'sandboxId',
      sandboxIdleTimeoutSeconds: 'sandboxIdleTimeoutSeconds',
      status: 'status',
      templateId: 'templateId',
      templateName: 'templateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sandboxIdleTTLInSeconds: 'number',
      createdAt: 'string',
      endedAt: 'string',
      lastUpdatedAt: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      sandboxArn: 'string',
      sandboxId: 'string',
      sandboxIdleTimeoutSeconds: 'number',
      status: 'string',
      templateId: 'string',
      templateName: 'string',
    };
  }

  validate() {
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

