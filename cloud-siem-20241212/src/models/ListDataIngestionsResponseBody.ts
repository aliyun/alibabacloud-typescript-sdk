// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataIngestionsResponseBodyDataIngestions extends $dara.Model {
  /**
   * @remarks
   * The activation time. This value is a UNIX timestamp in milliseconds.
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
   * The creation time. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1733269771123
   */
  createTime?: number;
  /**
   * @remarks
   * The data ingestion ID.
   * 
   * @example
   * alibaba_cloud_sas_netstat_ingestion_173326*******
   */
  dataIngestionId?: string;
  /**
   * @remarks
   * The data ingestion mode. Valid values:
   * - realtime
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
   * The data ingestion state. Valid values:
   * - ingested
   * - uningested
   * - abnormal
   * 
   * @example
   * ingested
   */
  dataIngestionState?: string;
  /**
   * @remarks
   * The error code for the data ingestion exception state.
   * 
   * @example
   * UserUnauthorized
   */
  dataIngestionStateCode?: string;
  /**
   * @remarks
   * The accessed state of data ingestion. Valid values:
   * - enabled: Enabled.
   * - disabled: Disabled.
   * 
   * @example
   * enabled
   */
  dataIngestionStatus?: string;
  /**
   * @remarks
   * The data ingestion template ID.
   * 
   * @example
   * alibaba_cloud_sas_netstat_ingestion
   */
  dataIngestionTemplateId?: string;
  /**
   * @remarks
   * The data ingestion type. Valid values:
   * - preset
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
   * The data source ID.
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
   * The normalization rule ID.
   * 
   * @example
   * nr-0aywiqdtaqdvwac7xkbjsf3a
   */
  normalizationRuleId?: string;
  /**
   * @remarks
   * The data source ID in real-time mode.
   * 
   * @example
   * ds-scpfegri73oyoknbc90c
   */
  realtimeDataSourceId?: string;
  /**
   * @remarks
   * The data source ID in scan mode.
   * 
   * @example
   * ds-scpfegri73oyoknbc90c
   */
  scanDataSourceId?: string;
  /**
   * @remarks
   * The stream job ID.
   * 
   * @example
   * 73a78aa245e3b1299d6ceed093de7bd8
   */
  streamJobId?: string;
  /**
   * @remarks
   * The update time. This value is a UNIX timestamp in milliseconds.
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

