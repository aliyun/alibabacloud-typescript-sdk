// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataBatchIngestionResponseBodyDataBatchIngestionDataIngestions extends $dara.Model {
  /**
   * @example
   * alibaba_cloud_sas_process_ingestion_173326*******。
   */
  dataIngestionId?: string;
  /**
   * @example
   * enabled。
   */
  dataIngestionStatus?: string;
  /**
   * @example
   * alibaba_cloud_sas_process_log_173326*******。
   */
  dataSourceId?: string;
  /**
   * @example
   * alibaba_cloud_sas。
   */
  productId?: string;
  /**
   * @example
   * alibaba_cloud。
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
  apsaraDataIngestionIds?: string[];
  /**
   * @example
   * enabled。
   */
  autoScanNew?: string;
  /**
   * @example
   * 1733269771123。
   */
  dataBatchIngestionEffectTime?: string;
  /**
   * @example
   * full。
   */
  dataBatchIngestionMode?: string;
  /**
   * @example
   * 1733269771123。
   */
  dataBatchIngestionSetTime?: string;
  /**
   * @example
   * pending。
   */
  dataBatchIngestionStatus?: string;
  dataIngestions?: GetDataBatchIngestionResponseBodyDataBatchIngestionDataIngestions[];
  /**
   * @example
   * true。
   */
  dataSourceRecognizeEnabled?: boolean;
  logUserIds?: string[];
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
  dataBatchIngestion?: GetDataBatchIngestionResponseBodyDataBatchIngestion;
  /**
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****。
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

