// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataIngestionTemplatesResponseBodyDataIngestionTemplates extends $dara.Model {
  capacityCount?: string;
  createTime?: number;
  dataIngestionMode?: string;
  dataIngestionStatus?: string;
  dataIngestionTemplateId?: string;
  dataIngestionTemplateName?: string;
  dataIngestionTemplateStatus?: string;
  dataSourceTemplateId?: string;
  normalizationRuleId?: string;
  normalizationRuleName?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      capacityCount: 'CapacityCount',
      createTime: 'CreateTime',
      dataIngestionMode: 'DataIngestionMode',
      dataIngestionStatus: 'DataIngestionStatus',
      dataIngestionTemplateId: 'DataIngestionTemplateId',
      dataIngestionTemplateName: 'DataIngestionTemplateName',
      dataIngestionTemplateStatus: 'DataIngestionTemplateStatus',
      dataSourceTemplateId: 'DataSourceTemplateId',
      normalizationRuleId: 'NormalizationRuleId',
      normalizationRuleName: 'NormalizationRuleName',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacityCount: 'string',
      createTime: 'number',
      dataIngestionMode: 'string',
      dataIngestionStatus: 'string',
      dataIngestionTemplateId: 'string',
      dataIngestionTemplateName: 'string',
      dataIngestionTemplateStatus: 'string',
      dataSourceTemplateId: 'string',
      normalizationRuleId: 'string',
      normalizationRuleName: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataIngestionTemplatesResponseBody extends $dara.Model {
  dataIngestionTemplates?: ListDataIngestionTemplatesResponseBodyDataIngestionTemplates[];
  pageNumber?: string;
  pageSize?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataIngestionTemplates: 'DataIngestionTemplates',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataIngestionTemplates: { 'type': 'array', 'itemType': ListDataIngestionTemplatesResponseBodyDataIngestionTemplates },
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataIngestionTemplates)) {
      $dara.Model.validateArray(this.dataIngestionTemplates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

