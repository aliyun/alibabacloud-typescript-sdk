// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Sandbox extends $dara.Model {
  /**
   * @remarks
   * 沙箱创建时间
   * 
   * This parameter is required.
   * 
   * @example
   * 2025-11-26T10:54:17.770719+08:00
   */
  createdAt?: string;
  /**
   * @example
   * 2025-11-26T10:54:17.770719+08:00
   */
  endedAt?: string;
  /**
   * @remarks
   * 最后更新时间
   * 
   * @example
   * 2025-11-26T10:54:17.770719+08:00
   */
  lastUpdatedAt?: string;
  /**
   * @example
   * {}
   */
  metadata?: { [key: string]: any };
  /**
   * @example
   * acs:ram::1760720386195983:role/aliyunfcdefaultrole
   */
  sandboxArn?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 01KAWBP6JQD0J3Z34BP4WMX1KG
   */
  sandboxId?: string;
  sandboxIdleTTLInSeconds?: number;
  /**
   * @remarks
   * 沙箱空闲超时时间（秒）
   * 
   * @example
   * 1800
   */
  sandboxIdleTimeoutSeconds?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * READY
   */
  status?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 8d409d30-cac1-445a-95d5-476c47780336.schema
   */
  templateId?: string;
  /**
   * @example
   * my-template
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      endedAt: 'endedAt',
      lastUpdatedAt: 'lastUpdatedAt',
      metadata: 'metadata',
      sandboxArn: 'sandboxArn',
      sandboxId: 'sandboxId',
      sandboxIdleTTLInSeconds: 'sandboxIdleTTLInSeconds',
      sandboxIdleTimeoutSeconds: 'sandboxIdleTimeoutSeconds',
      status: 'status',
      templateId: 'templateId',
      templateName: 'templateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      endedAt: 'string',
      lastUpdatedAt: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      sandboxArn: 'string',
      sandboxId: 'string',
      sandboxIdleTTLInSeconds: 'number',
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

