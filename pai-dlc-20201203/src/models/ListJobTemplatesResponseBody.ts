// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobTemplatesResponseBodyJobTemplates extends $dara.Model {
  /**
   * @example
   * 2
   */
  defaultVersion?: number;
  /**
   * @example
   * job description
   */
  description?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2026-01-23T07:29:06Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2026-03-03T05:48:02Z
   */
  gmtModifyTime?: string;
  /**
   * @example
   * {}
   */
  metadata?: { [key: string]: any };
  /**
   * @example
   * 20**************26
   */
  modifiedBy?: string;
  /**
   * @example
   * tpl1r5g9ait7****
   */
  templateId?: string;
  /**
   * @example
   * job-template-1772516653885
   */
  templateName?: string;
  /**
   * @example
   * 142388383837****
   */
  tenantId?: string;
  /**
   * @example
   * 20**************26
   */
  userId?: string;
  /**
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
  jobTemplates?: ListJobTemplatesResponseBodyJobTemplates[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * 本次请求的 ID，用于诊断和答疑。
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0D*****
   */
  requestId?: string;
  /**
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

