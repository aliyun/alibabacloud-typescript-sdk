// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataIngestionTemplatesResponseBodyDataIngestionTemplates extends $dara.Model {
  /**
   * @remarks
   * The number of associated security capabilities.
   * 
   * @example
   * 3
   */
  capacityCount?: string;
  /**
   * @remarks
   * The time when the template was created.
   * 
   * @example
   * 1733269771123
   */
  createTime?: number;
  /**
   * @remarks
   * The data ingestion mode. Valid values:
   * 
   * - realtime
   * 
   * - scan
   * 
   * @example
   * realtime
   */
  dataIngestionMode?: string;
  /**
   * @remarks
   * The data ingestion status. Valid values:
   * 
   * - enabled: enabled.
   * 
   * - disabled: disabled.
   * 
   * @example
   * enabled
   */
  dataIngestionStatus?: string;
  /**
   * @remarks
   * The ID of the data ingestion template.
   * 
   * @example
   * alibaba_cloud_sas_account_snapshot_log
   */
  dataIngestionTemplateId?: string;
  /**
   * @remarks
   * The name of the data ingestion template.
   * 
   * @example
   * alibaba_cloud_sas_account_snapshot_log
   */
  dataIngestionTemplateName?: string;
  /**
   * @remarks
   * The status of the data ingestion template. Valid values:
   * 
   * - pending
   * 
   * - running
   * 
   * - success
   * 
   * - failed
   * 
   * @example
   * running
   */
  dataIngestionTemplateStatus?: string;
  /**
   * @remarks
   * The ID of the data source template.
   * 
   * @example
   * alibaba_cloud_sas_account_snapshot_log_173326*******
   */
  dataSourceTemplateId?: string;
  /**
   * @remarks
   * The ID of the normalization rule.
   * 
   * @example
   * alibaba_cloud_actiontrail_event_rule
   */
  normalizationRuleId?: string;
  /**
   * @remarks
   * The name of the normalization rule.
   * 
   * @example
   * normalization_rule_ke1RN
   */
  normalizationRuleName?: string;
  /**
   * @remarks
   * The time when the template was last updated.
   * 
   * @example
   * 173326*******
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
  /**
   * @remarks
   * The list of data ingestion templates.
   */
  dataIngestionTemplates?: ListDataIngestionTemplatesResponseBodyDataIngestionTemplates[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
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

