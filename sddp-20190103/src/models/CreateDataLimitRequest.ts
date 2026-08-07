// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataLimitRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auditing. Valid values:
   * 
   * - **0**: Auditing is disabled.
   * - **1**: Auditing is enabled.
   * 
   * @example
   * 1
   */
  auditStatus?: number;
  /**
   * @remarks
   * Specifies whether to automatically trigger a rescan when rules are changed. Valid values:
   * 
   * - **0**: Automatic rescan is not triggered.
   * - **1**: Automatic rescan is triggered.
   * 
   * > When a rule change triggers an automatic rescan, a full scan is performed on all data in the data source.
   * 
   * @example
   * 1
   */
  autoScan?: number;
  /**
   * @remarks
   * The credential permission. Valid values:
   * - **ReadOnly**: read-only permission.
   * - **ReadWrite**: read and write permission.
   * 
   * @example
   * ReadOnly
   */
  certificatePermission?: string;
  /**
   * @remarks
   * Specifies whether to enable sensitive data detection. Valid values:
   * - **1**: Enabled.
   * - **0**: Disabled.
   * 
   * > If the asset is authorized for the first time, the default value is 1. If the asset has been previously authorized, the value from the last authorization is used, which may be 0 or 1. To perform sensitive data detection on the asset, set this parameter to 1.
   * 
   * @example
   * 1
   */
  enable?: number;
  /**
   * @remarks
   * The type of the database. Valid values:
   * - **MySQL**
   * - **SQLServer**
   * 
   * @example
   * MySQL
   */
  engineType?: string;
  /**
   * @remarks
   * The anomalous activity detection status. Valid values:
   * - **0**: Disabled.
   * - **1**: Enabled (default).
   * 
   * @example
   * 1
   */
  eventStatus?: number;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 2
   */
  featureType?: number;
  /**
   * @remarks
   * Specifies whether to immediately scan the authorized asset. Valid values:
   * 
   * - **false**: The asset is not immediately scanned.
   * - **true**: The asset is immediately scanned.
   * 
   * @example
   * false
   */
  instantlyScan?: boolean;
  /**
   * @remarks
   * The language of the request and response. Default value: **zh_cn**. Valid values:
   * - **zh_cn**: Chinese.
   * - **en_us**: English.
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @remarks
   * The retention period of raw logs after auditing is enabled. Unit: days. Valid values:
   * - **30**
   * - **90**
   * - **180**
   * - **365**
   * 
   * @example
   * 30
   */
  logStoreDay?: number;
  /**
   * @remarks
   * The OCR status. Valid values:
   * - **1**: Enabled.
   * - **0**: Disabled.
   * 
   * @example
   * 0
   */
  ocrStatus?: number;
  /**
   * @remarks
   * Required. The name of the asset, which consists of the instance ID and the database connection string separated by a period (.).
   * 
   * @example
   * rm-****34.******name
   */
  parentId?: string;
  /**
   * @remarks
   * The password used to access the database asset.
   * 
   * @example
   * p****d
   */
  password?: string;
  /**
   * @remarks
   * The database connection port.
   * 
   * @example
   * 3306
   */
  port?: number;
  /**
   * @remarks
   * The type of the service to which the asset to be scanned belongs. Valid values:
   * 
   * - **1**: MaxCompute.
   * - **2**: OSS.
   * - **3**: ADS.
   * - **4**: OTS.
   * - **5**: RDS.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  resourceType?: number;
  /**
   * @remarks
   * The number of sample entries for sensitive data detection after data detection is enabled. Valid values:
   * - **0**
   * - **5**
   * - **10**
   * > Default value: 10.
   * 
   * @example
   * 0
   */
  samplingSize?: number;
  /**
   * @remarks
   * Required. The region in which the asset resides. Valid values:
   * - **cn-beijing**: China (Beijing).
   * - **cn-zhangjiakou**: China (Zhangjiakou).
   * - **cn-huhehaote**: China (Hohhot).
   * - **cn-hangzhou**: China (Hangzhou).
   * - **cn-shanghai**: China (Shanghai).
   * - **cn-shenzhen**: China (Shenzhen).
   * - **cn-hongkong**: Hong Kong (China).
   * 
   * @example
   * cn-hangzhou
   */
  serviceRegionId?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 106.11.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The username of the database asset.
   * 
   * @example
   * y*****m
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      auditStatus: 'AuditStatus',
      autoScan: 'AutoScan',
      certificatePermission: 'CertificatePermission',
      enable: 'Enable',
      engineType: 'EngineType',
      eventStatus: 'EventStatus',
      featureType: 'FeatureType',
      instantlyScan: 'InstantlyScan',
      lang: 'Lang',
      logStoreDay: 'LogStoreDay',
      ocrStatus: 'OcrStatus',
      parentId: 'ParentId',
      password: 'Password',
      port: 'Port',
      resourceType: 'ResourceType',
      samplingSize: 'SamplingSize',
      serviceRegionId: 'ServiceRegionId',
      sourceIp: 'SourceIp',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditStatus: 'number',
      autoScan: 'number',
      certificatePermission: 'string',
      enable: 'number',
      engineType: 'string',
      eventStatus: 'number',
      featureType: 'number',
      instantlyScan: 'boolean',
      lang: 'string',
      logStoreDay: 'number',
      ocrStatus: 'number',
      parentId: 'string',
      password: 'string',
      port: 'number',
      resourceType: 'number',
      samplingSize: 'number',
      serviceRegionId: 'string',
      sourceIp: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

