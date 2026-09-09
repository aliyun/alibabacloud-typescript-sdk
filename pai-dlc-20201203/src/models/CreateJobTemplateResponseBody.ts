// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateJobTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The default version number currently in use.
   * 
   * @example
   * 1
   */
  defaultVersion?: number;
  /**
   * @remarks
   * The description of the task template.
   * 
   * @example
   * Template description
   */
  description?: string;
  /**
   * @remarks
   * The time when the template was created.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2025-12-31T02:18:09Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time when the template was last modified.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2026-01-12T14:36:00Z
   */
  gmtModifyTime?: string;
  /**
   * @remarks
   * The most recent time when a node was successfully created by using this template. This parameter is not returned if you create a template that has not been used.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2026-09-03T11:30:00Z
   */
  lastUsedTime?: string;
  /**
   * @remarks
   * The custom key-value pair metadata defined by the user.
   * 
   * @example
   * {}
   */
  metadata?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the request, which is used for diagnostics and troubleshooting.
   * 
   * @example
   * 8762921A-911C-515F-A3A4-*********
   */
  requestId?: string;
  /**
   * @remarks
   * The unique identifier of the task template.
   * 
   * @example
   * tplmceolmf2****
   */
  templateId?: string;
  /**
   * @remarks
   * The name of the task template.
   * 
   * @example
   * job-template-example-1778047****
   */
  templateName?: string;
  /**
   * @remarks
   * The ID of the tenant to which the template belongs.
   * 
   * @example
   * 10**************14
   */
  tenantId?: string;
  /**
   * @remarks
   * The ID of the user who created the template.
   * 
   * @example
   * 20**************02
   */
  userId?: string;
  /**
   * @remarks
   * The version number of the currently returned version.
   * 
   * @example
   * 1
   */
  version?: number;
  /**
   * @remarks
   * The ID of the workspace to which the template belongs.
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
      lastUsedTime: 'LastUsedTime',
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
      lastUsedTime: 'string',
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

