// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Sandbox extends $dara.Model {
  /**
   * @remarks
   * Sandbox Creation Time
   * 
   * This parameter is required.
   * 
   * @example
   * 2025-11-26T10:54:17.770719+08:00
   */
  createdAt?: string;
  /**
   * @remarks
   * Sandbox stop time
   * 
   * @example
   * 2025-11-26T10:54:17.770719+08:00
   */
  endedAt?: string;
  /**
   * @remarks
   * Last Update Time
   * 
   * @example
   * 2025-11-26T10:54:17.770719+08:00
   */
  lastUpdatedAt?: string;
  /**
   * @remarks
   * Sandbox metadata
   * 
   * @example
   * {}
   */
  metadata?: { [key: string]: any };
  /**
   * @remarks
   * Sandbox resource ARN
   * 
   * @example
   * acs:ram::1760720386195983:role/aliyunfcdefaultrole
   */
  sandboxArn?: string;
  /**
   * @remarks
   * Sandbox ID
   * 
   * This parameter is required.
   * 
   * @example
   * 01KAWBP6JQD0J3Z34BP4WMX1KG
   */
  sandboxId?: string;
  /**
   * @remarks
   * Sandbox lifecycle duration (deprecated)
   * 
   * @example
   * 已弃用
   */
  sandboxIdleTTLInSeconds?: number;
  /**
   * @remarks
   * Sandbox idle timeout (seconds)
   * 
   * @example
   * 1800
   */
  sandboxIdleTimeoutSeconds?: number;
  /**
   * @remarks
   * Status
   * 
   * This parameter is required.
   * 
   * @example
   * READY
   */
  status?: string;
  /**
   * @remarks
   * Template ID
   * 
   * This parameter is required.
   * 
   * @example
   * 8d409d30-cac1-445a-95d5-476c47780336.schema
   */
  templateId?: string;
  /**
   * @remarks
   * Template Name
   * 
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

