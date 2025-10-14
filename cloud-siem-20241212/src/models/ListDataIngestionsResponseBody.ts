// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataIngestionsResponseBodyDataIngestions extends $dara.Model {
  /**
   * @example
   * 1733269771123。
   */
  activeTime?: number;
  /**
   * @example
   * 3。
   */
  capacityCount?: number;
  /**
   * @example
   * 1733269771123。
   */
  createTime?: number;
  /**
   * @example
   * alibaba_cloud_sas_netstat_ingestion_173326*******。
   */
  dataIngestionId?: string;
  /**
   * @example
   * realtime。
   */
  dataIngestionMode?: string;
  /**
   * @example
   * true。
   */
  dataIngestionModeEditable?: boolean;
  /**
   * @example
   * ingested。
   */
  dataIngestionState?: string;
  /**
   * @example
   * UserUnauthorized。
   */
  dataIngestionStateCode?: string;
  /**
   * @example
   * enabled。
   */
  dataIngestionStatus?: string;
  /**
   * @example
   * alibaba_cloud_sas_netstat_ingestion。
   */
  dataIngestionTemplateId?: string;
  /**
   * @example
   * preset。
   */
  dataIngestionType?: string;
  /**
   * @example
   * true。
   */
  dataSourceEditable?: boolean;
  /**
   * @example
   * ds-scpfegri73oyoknbc90c。
   */
  dataSourceId?: string;
  /**
   * @example
   * true。
   */
  normalizationRuleEditable?: boolean;
  /**
   * @example
   * nr-0aywiqdtaqdvwac7xkbjsf3a。
   */
  normalizationRuleId?: string;
  /**
   * @example
   * ds-scpfegri73oyoknbc90c。
   */
  realtimeDataSourceId?: string;
  /**
   * @example
   * ds-scpfegri73oyoknbc90c。
   */
  scanDataSourceId?: string;
  /**
   * @example
   * 73a78aa245e3b1299d6ceed093de7bd8。
   */
  streamJobId?: string;
  /**
   * @example
   * 1733269771123。
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
  dataIngestions?: ListDataIngestionsResponseBodyDataIngestions[];
  /**
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****。
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

