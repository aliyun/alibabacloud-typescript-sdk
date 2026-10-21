// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataBatchIngestionResponseBodyDataBatchIngestionDataIngestions extends $dara.Model {
  /**
   * @remarks
   * The data ingestion ID.
   * 
   * @example
   * alibaba_cloud_sas_process_ingestion_173326*******
   */
  dataIngestionId?: string;
  /**
   * @remarks
   * The accessed state of the data ingestion. Valid values:
   * - enabled: Enabled.
   * - disabled: Disabled.
   * 
   * @example
   * enabled
   */
  dataIngestionStatus?: string;
  /**
   * @remarks
   * The data source ID.
   * 
   * @example
   * alibaba_cloud_sas_process_log_173326*******
   */
  dataSourceId?: string;
  /**
   * @remarks
   * The product ID.
   * 
   * @example
   * alibaba_cloud_sas
   */
  productId?: string;
  /**
   * @remarks
   * The vendor ID.
   * 
   * @example
   * alibaba_cloud
   */
  vendorId?: string;
  static names(): { [key: string]: string } {
    return {
      dataIngestionId: 'DataIngestionId',
      dataIngestionStatus: 'DataIngestionStatus',
      dataSourceId: 'DataSourceId',
      productId: 'ProductId',
      vendorId: 'VendorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataIngestionId: 'string',
      dataIngestionStatus: 'string',
      dataSourceId: 'string',
      productId: 'string',
      vendorId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataBatchIngestionResponseBodyDataBatchIngestion extends $dara.Model {
  /**
   * @remarks
   * The list of cloud native mode ingestion IDs.
   */
  apsaraDataIngestionIds?: string[];
  /**
   * @remarks
   * Indicates whether new users are automatically discovered. Valid values:
   * - enabled: Enabled.
   * - disabled: Disabled.
   * 
   * @example
   * enabled
   */
  autoScanNew?: string;
  /**
   * @remarks
   * The effective period of the data batch ingestion. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1733269771123
   */
  dataBatchIngestionEffectTime?: string;
  /**
   * @remarks
   * The batch data ingestion mode.
   * 
   * @example
   * full
   */
  dataBatchIngestionMode?: string;
  /**
   * @remarks
   * The time when the data batch ingestion was configured. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1733269771123
   */
  dataBatchIngestionSetTime?: string;
  /**
   * @remarks
   * The accessed state of the data batch ingestion. Valid values:
   * - pending: Pending.
   * - running: In effect.
   * - success: Succeeded.
   * - failed: Failed.
   * 
   * @example
   * pending
   */
  dataBatchIngestionStatus?: string;
  /**
   * @remarks
   * The list of data ingestions.
   */
  dataIngestions?: GetDataBatchIngestionResponseBodyDataBatchIngestionDataIngestions[];
  /**
   * @remarks
   * Indicates whether automatic discovery of new Logstores is enabled.
   * 
   * @example
   * true
   */
  dataSourceRecognizeEnabled?: boolean;
  /**
   * @remarks
   * The list of user IDs for data batch ingestion.
   */
  logUserIds?: string[];
  /**
   * @remarks
   * The list of recommended ingestion IDs.
   */
  recommendDataIngestionIds?: string[];
  static names(): { [key: string]: string } {
    return {
      apsaraDataIngestionIds: 'ApsaraDataIngestionIds',
      autoScanNew: 'AutoScanNew',
      dataBatchIngestionEffectTime: 'DataBatchIngestionEffectTime',
      dataBatchIngestionMode: 'DataBatchIngestionMode',
      dataBatchIngestionSetTime: 'DataBatchIngestionSetTime',
      dataBatchIngestionStatus: 'DataBatchIngestionStatus',
      dataIngestions: 'DataIngestions',
      dataSourceRecognizeEnabled: 'DataSourceRecognizeEnabled',
      logUserIds: 'LogUserIds',
      recommendDataIngestionIds: 'RecommendDataIngestionIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apsaraDataIngestionIds: { 'type': 'array', 'itemType': 'string' },
      autoScanNew: 'string',
      dataBatchIngestionEffectTime: 'string',
      dataBatchIngestionMode: 'string',
      dataBatchIngestionSetTime: 'string',
      dataBatchIngestionStatus: 'string',
      dataIngestions: { 'type': 'array', 'itemType': GetDataBatchIngestionResponseBodyDataBatchIngestionDataIngestions },
      dataSourceRecognizeEnabled: 'boolean',
      logUserIds: { 'type': 'array', 'itemType': 'string' },
      recommendDataIngestionIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.apsaraDataIngestionIds)) {
      $dara.Model.validateArray(this.apsaraDataIngestionIds);
    }
    if(Array.isArray(this.dataIngestions)) {
      $dara.Model.validateArray(this.dataIngestions);
    }
    if(Array.isArray(this.logUserIds)) {
      $dara.Model.validateArray(this.logUserIds);
    }
    if(Array.isArray(this.recommendDataIngestionIds)) {
      $dara.Model.validateArray(this.recommendDataIngestionIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataBatchIngestionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data batch ingestion configuration.
   */
  dataBatchIngestion?: GetDataBatchIngestionResponseBodyDataBatchIngestion;
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
      dataBatchIngestion: 'DataBatchIngestion',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataBatchIngestion: GetDataBatchIngestionResponseBodyDataBatchIngestion,
      requestId: 'string',
    };
  }

  validate() {
    if(this.dataBatchIngestion && typeof (this.dataBatchIngestion as any).validate === 'function') {
      (this.dataBatchIngestion as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

