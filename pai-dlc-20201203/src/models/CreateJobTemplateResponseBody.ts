// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateJobTemplateResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  defaultVersion?: number;
  /**
   * @example
   * Template description
   */
  description?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2025-12-31T02:18:09Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2026-01-12T14:36:00Z
   */
  gmtModifyTime?: string;
  /**
   * @example
   * {}
   */
  metadata?: { [key: string]: any };
  /**
   * @remarks
   * 本次请求的 ID，用于诊断和答疑。
   * 
   * @example
   * 8762921A-911C-515F-A3A4-*********
   */
  requestId?: string;
  /**
   * @remarks
   * 此次调用创建的模板 ID。
   * 
   * @example
   * tplmceolmf2****
   */
  templateId?: string;
  /**
   * @example
   * job-template-example-1778047****
   */
  templateName?: string;
  /**
   * @example
   * 10**************14
   */
  tenantId?: string;
  /**
   * @example
   * 20**************02
   */
  userId?: string;
  /**
   * @example
   * 1
   */
  version?: number;
  /**
   * @example
   * 15****05
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      defaultVersion: 'DefaultVersion',
      description: 'Description',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifyTime: 'GmtModifyTime',
      metadata: 'Metadata',
      requestId: 'RequestId',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      tenantId: 'TenantId',
      userId: 'UserId',
      version: 'Version',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultVersion: 'number',
      description: 'string',
      gmtCreateTime: 'string',
      gmtModifyTime: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
      templateId: 'string',
      templateName: 'string',
      tenantId: 'string',
      userId: 'string',
      version: 'number',
      workspaceId: 'string',
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

