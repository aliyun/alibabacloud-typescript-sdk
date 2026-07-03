// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataBatchIngestionResponseBodyDataBatchIngestionDataIngestions extends $dara.Model {
  /**
   * @remarks
   * The ID of the data ingestion task.
   * 
   * @example
   * alibaba_cloud_sas_process_ingestion_173326*******
   */
  dataIngestionId?: string;
  /**
   * @remarks
   * The status of the data ingestion task. Valid values:
   * 
   * - enabled: enabled
   * 
   * - disabled: disabled
   * 
   * @example
   * enabled
   */
  dataIngestionStatus?: string;
  /**
   * @remarks
   * The ID of the data source.
   * 
   * @example
   * alibaba_cloud_sas_process_log_173326*******
   */
  dataSourceId?: string;
  /**
   * @remarks
   * The ID of the product.
   * 
   * @example
   * alibaba_cloud_sas
   */
  productId?: string;
  /**
   * @remarks
   * The ID of the vendor.
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
   * The list of data ingestion IDs for Alibaba Cloud services.
   */
  apsaraDataIngestionIds?: string[];
  /**
   * @remarks
   * Specifies whether to automatically discover new users. Valid values:
   * 
   * - enabled: New users are automatically discovered.
   * 
   * - disabled: New users are not automatically discovered.
   * 
   * @example
   * enabled
   */
  autoScanNew?: string;
  /**
   * @remarks
   * The time when the configuration of the batch data ingestion task took effect.
   * 
   * @example
   * 1733269771123
   */
  dataBatchIngestionEffectTime?: string;
  /**
   * @remarks
   * The mode of the batch data ingestion task.
   * 
   * @example
   * full
   */
  dataBatchIngestionMode?: string;
  /**
   * @remarks
   * The time when the batch data ingestion task was configured.
   * 
   * @example
   * 1733269771123
   */
  dataBatchIngestionSetTime?: string;
  /**
   * @remarks
   * The status of the batch data ingestion task. Valid values:
   * 
   * - pending: The configuration is pending to take effect.
   * 
   * - running: The configuration is taking effect.
   * 
   * - success: The configuration has taken effect.
   * 
   * - failed: The configuration failed to take effect.
   * 
   * @example
   * pending
   */
  dataBatchIngestionStatus?: string;
  /**
   * @remarks
   * The list of data ingestion tasks.
   */
  dataIngestions?: GetDataBatchIngestionResponseBodyDataBatchIngestionDataIngestions[];
  /**
   * @remarks
   * Specifies whether to automatically discover new Logstores.
   * 
   * @example
   * true
   */
  dataSourceRecognizeEnabled?: boolean;
  /**
   * @remarks
   * The list of user IDs for batch data ingestion.
   */
  logUserIds?: string[];
  /**
   * @remarks
   * The list of recommended data ingestion IDs.
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
   * The details of the batch data ingestion task.
   */
  dataBatchIngestion?: GetDataBatchIngestionResponseBodyDataBatchIngestion;
  /**
   * @remarks
   * The ID of the request.
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

