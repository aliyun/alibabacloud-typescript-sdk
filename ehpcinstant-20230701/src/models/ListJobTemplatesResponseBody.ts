// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobTemplatesResponseBodyJobTemplatesTags extends $dara.Model {
  /**
   * @remarks
   * The job tag key.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The job tag value.
   * 
   * @example
   * TestValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobTemplatesResponseBodyJobTemplates extends $dara.Model {
  /**
   * @remarks
   * The creation time. The example uses the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2026-04-20 11:09:59
   */
  createTime?: string;
  /**
   * @remarks
   * The template description.
   * 
   * @example
   * Demo
   */
  jobTemplateDescription?: string;
  /**
   * @remarks
   * The job template ID.
   * 
   * @example
   * jt-xxxx
   */
  jobTemplateId?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * my-template
   */
  jobTemplateName?: string;
  /**
   * @remarks
   * The job template status.
   * 
   * @example
   * Working
   */
  status?: string;
  /**
   * @remarks
   * The job tags.
   */
  tags?: ListJobTemplatesResponseBodyJobTemplatesTags[];
  /**
   * @remarks
   * The update time. The example uses the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2026-04-20 11:09:59
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      jobTemplateDescription: 'JobTemplateDescription',
      jobTemplateId: 'JobTemplateId',
      jobTemplateName: 'JobTemplateName',
      status: 'Status',
      tags: 'Tags',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      jobTemplateDescription: 'string',
      jobTemplateId: 'string',
      jobTemplateName: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListJobTemplatesResponseBodyJobTemplatesTags },
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
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
   * The job templates.
   */
  jobTemplates?: ListJobTemplatesResponseBodyJobTemplates[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 896D338C-E4F4-41EC-A154-D605E5DE****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of templates.
   * 
   * @example
   * 1
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

