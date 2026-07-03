// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataIngestionsResponseBodyDataIngestions extends $dara.Model {
  /**
   * @remarks
   * The time when the data ingestion was enabled.
   * 
   * @example
   * 1733269771123
   */
  activeTime?: number;
  /**
   * @remarks
   * The number of associated security capabilities.
   * 
   * @example
   * 3
   */
  capacityCount?: number;
  /**
   * @remarks
   * The time when the data ingestion was created.
   * 
   * @example
   * 1733269771123
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the data ingestion.
   * 
   * @example
   * alibaba_cloud_sas_netstat_ingestion_173326*******
   */
  dataIngestionId?: string;
  /**
   * @remarks
   * The mode of the data ingestion. Valid values:
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
   * Indicates whether the data ingestion mode is editable.
   * 
   * @example
   * true
   */
  dataIngestionModeEditable?: boolean;
  /**
   * @remarks
   * The state of the data ingestion. Valid values:
   * 
   * - ingested
   * 
   * - uningested
   * 
   * - abnormal
   * 
   * @example
   * ingested
   */
  dataIngestionState?: string;
  /**
   * @remarks
   * The error code for the data ingestion anomaly.
   * 
   * @example
   * UserUnauthorized
   */
  dataIngestionStateCode?: string;
  /**
   * @remarks
   * The status of the data ingestion. Valid values:
   * 
   * - enabled: The data ingestion is enabled.
   * 
   * - disabled: The data ingestion is disabled.
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
   * alibaba_cloud_sas_netstat_ingestion
   */
  dataIngestionTemplateId?: string;
  /**
   * @remarks
   * The type of the data ingestion. Valid values:
   * 
   * - preset
   * 
   * - custom
   * 
   * @example
   * preset
   */
  dataIngestionType?: string;
  /**
   * @remarks
   * Indicates whether the data source is editable.
   * 
   * @example
   * true
   */
  dataSourceEditable?: boolean;
  /**
   * @remarks
   * The ID of the data source.
   * 
   * @example
   * ds-scpfegri73oyoknbc90c
   */
  dataSourceId?: string;
  /**
   * @remarks
   * Indicates whether the normalization rule is editable.
   * 
   * @example
   * true
   */
  normalizationRuleEditable?: boolean;
  /**
   * @remarks
   * The ID of the normalization rule.
   * 
   * @example
   * nr-0aywiqdtaqdvwac7xkbjsf3a
   */
  normalizationRuleId?: string;
  /**
   * @remarks
   * The ID of the data source for real-time ingestion.
   * 
   * @example
   * ds-scpfegri73oyoknbc90c
   */
  realtimeDataSourceId?: string;
  /**
   * @remarks
   * The ID of the data source for scan-based ingestion.
   * 
   * @example
   * ds-scpfegri73oyoknbc90c
   */
  scanDataSourceId?: string;
  /**
   * @remarks
   * The job ID of the stream processing task.
   * 
   * @example
   * 73a78aa245e3b1299d6ceed093de7bd8
   */
  streamJobId?: string;
  /**
   * @remarks
   * The time when the data ingestion was last updated.
   * 
   * @example
   * 1733269771123
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      activeTime: 'ActiveTime',
      capacityCount: 'CapacityCount',
      createTime: 'CreateTime',
      dataIngestionId: 'DataIngestionId',
      dataIngestionMode: 'DataIngestionMode',
      dataIngestionModeEditable: 'DataIngestionModeEditable',
      dataIngestionState: 'DataIngestionState',
      dataIngestionStateCode: 'DataIngestionStateCode',
      dataIngestionStatus: 'DataIngestionStatus',
      dataIngestionTemplateId: 'DataIngestionTemplateId',
      dataIngestionType: 'DataIngestionType',
      dataSourceEditable: 'DataSourceEditable',
      dataSourceId: 'DataSourceId',
      normalizationRuleEditable: 'NormalizationRuleEditable',
      normalizationRuleId: 'NormalizationRuleId',
      realtimeDataSourceId: 'RealtimeDataSourceId',
      scanDataSourceId: 'ScanDataSourceId',
      streamJobId: 'StreamJobId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeTime: 'number',
      capacityCount: 'number',
      createTime: 'number',
      dataIngestionId: 'string',
      dataIngestionMode: 'string',
      dataIngestionModeEditable: 'boolean',
      dataIngestionState: 'string',
      dataIngestionStateCode: 'string',
      dataIngestionStatus: 'string',
      dataIngestionTemplateId: 'string',
      dataIngestionType: 'string',
      dataSourceEditable: 'boolean',
      dataSourceId: 'string',
      normalizationRuleEditable: 'boolean',
      normalizationRuleId: 'string',
      realtimeDataSourceId: 'string',
      scanDataSourceId: 'string',
      streamJobId: 'string',
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

export class ListDataIngestionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of data ingestions.
   */
  dataIngestions?: ListDataIngestionsResponseBodyDataIngestions[];
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
      dataIngestions: 'DataIngestions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataIngestions: { 'type': 'array', 'itemType': ListDataIngestionsResponseBodyDataIngestions },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataIngestions)) {
      $dara.Model.validateArray(this.dataIngestions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

