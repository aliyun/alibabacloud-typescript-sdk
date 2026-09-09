// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobTemplatesResponseBodyJobTemplates extends $dara.Model {
  /**
   * @remarks
   * The default version number.
   * 
   * @example
   * 2
   */
  defaultVersion?: number;
  /**
   * @remarks
   * The template description.
   * 
   * @example
   * job description
   */
  description?: string;
  /**
   * @remarks
   * The time when the template was created.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2026-01-23T07:29:06Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time when the template was last modified.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2026-03-03T05:48:02Z
   */
  gmtModifyTime?: string;
  /**
   * @remarks
   * The most recent time when a task was successfully created by using this template.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2026-09-03T11:30:00Z
   */
  lastUsedTime?: string;
  /**
   * @remarks
   * The custom metadata.
   * 
   * @example
   * {}
   */
  metadata?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the user who last modified the template.
   * 
   * @example
   * 20**************26
   */
  modifiedBy?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * tpl1r5g9ait7****
   */
  templateId?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * job-template-1772516653885
   */
  templateName?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 142388383837****
   */
  tenantId?: string;
  /**
   * @remarks
   * The ID of the user who created the template.
   * 
   * @example
   * 20**************26
   */
  userId?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 88****
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
      modifiedBy: 'ModifiedBy',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      tenantId: 'TenantId',
      userId: 'UserId',
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
      modifiedBy: 'string',
      templateId: 'string',
      templateName: 'string',
      tenantId: 'string',
      userId: 'string',
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

export class ListJobTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of templates.
   */
  jobTemplates?: ListJobTemplatesResponseBodyJobTemplates[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0D*****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      jobTemplates: 'JobTemplates',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobTemplates: { 'type': 'array', 'itemType': ListJobTemplatesResponseBodyJobTemplates },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.jobTemplates)) {
      $dara.Model.validateArray(this.jobTemplates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

