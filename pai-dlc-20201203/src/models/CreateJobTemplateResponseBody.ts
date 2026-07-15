// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateJobTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The default version number of the job template.
   * 
   * @example
   * 1
   */
  defaultVersion?: number;
  /**
   * @remarks
   * The description of the job template.
   * 
   * @example
   * Template description
   */
  description?: string;
  /**
   * @remarks
   * The creation time of the job template.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2025-12-31T02:18:09Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The last modification time of the job template.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2026-01-12T14:36:00Z
   */
  gmtModifyTime?: string;
  /**
   * @remarks
   * User-defined key-value metadata.
   * 
   * @example
   * {}
   */
  metadata?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the request, used for troubleshooting.
   * 
   * @example
   * 8762921A-911C-515F-A3A4-*********
   */
  requestId?: string;
  /**
   * @remarks
   * The unique ID of the job template.
   * 
   * @example
   * tplmceolmf2****
   */
  templateId?: string;
  /**
   * @remarks
   * The name of the job template.
   * 
   * @example
   * job-template-example-1778047****
   */
  templateName?: string;
  /**
   * @remarks
   * The ID of the tenant that contains the job template.
   * 
   * @example
   * 10**************14
   */
  tenantId?: string;
  /**
   * @remarks
   * The ID of the user who created the job template.
   * 
   * @example
   * 20**************02
   */
  userId?: string;
  /**
   * @remarks
   * The version number of the created job template.
   * 
   * @example
   * 1
   */
  version?: number;
  /**
   * @remarks
   * The ID of the workspace that contains the job template.
   * 
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

