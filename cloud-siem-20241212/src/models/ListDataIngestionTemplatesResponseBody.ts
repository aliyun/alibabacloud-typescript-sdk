// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataIngestionTemplatesResponseBodyDataIngestionTemplates extends $dara.Model {
  /**
   * @example
   * 3。
   */
  capacityCount?: string;
  /**
   * @example
   * 1733269771123。
   */
  createTime?: number;
  /**
   * @example
   * realtime。
   */
  dataIngestionMode?: string;
  /**
   * @example
   * enabled。
   */
  dataIngestionStatus?: string;
  /**
   * @example
   * alibaba_cloud_sas_account_snapshot_log。
   */
  dataIngestionTemplateId?: string;
  /**
   * @example
   * alibaba_cloud_sas_account_snapshot_log。
   */
  dataIngestionTemplateName?: string;
  /**
   * @example
   * running。
   */
  dataIngestionTemplateStatus?: string;
  /**
   * @example
   * alibaba_cloud_sas_account_snapshot_log_173326*******。
   */
  dataSourceTemplateId?: string;
  /**
   * @example
   * alibaba_cloud_actiontrail_event_rule。
   */
  normalizationRuleId?: string;
  /**
   * @example
   * normalization_rule_ke1RN。
   */
  normalizationRuleName?: string;
  /**
   * @example
   * 173326*******。
   */
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
  /**
   * @example
   * 1。
   */
  pageNumber?: string;
  /**
   * @example
   * 10。
   */
  pageSize?: string;
  /**
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****。
   */
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

