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
   * The description of the job template.
   * 
   * @example
   * job description
   */
  description?: string;
  /**
   * @remarks
   * The creation time of the template, in UTC and ISO 8601 format.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2026-01-23T07:29:06Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The modification time of the template, in UTC and ISO 8601 format.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2026-03-03T05:48:02Z
   */
  gmtModifyTime?: string;
  /**
   * @remarks
   * Custom metadata, represented as a collection of key-value pairs.
   * 
   * @example
   * {}
   */
  metadata?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the modifier.
   * 
   * @example
   * 20**************26
   */
  modifiedBy?: string;
  /**
   * @remarks
   * The ID of the job template.
   * 
   * @example
   * tpl1r5g9ait7****
   */
  templateId?: string;
  /**
   * @remarks
   * The name of the job template.
   * 
   * @example
   * job-template-1772516653885
   */
  templateName?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * 142388383837****
   */
  tenantId?: string;
  /**
   * @remarks
   * The ID of the creator.
   * 
   * @example
   * 20**************26
   */
  userId?: string;
  /**
   * @remarks
   * The ID of the workspace.
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
   * The list of job templates.
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
   * The number of results on the current page.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The unique ID of the request. Use this ID to troubleshoot issues.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0D*****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of job templates that match the filter conditions.
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

