// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataLimitRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the security audit feature. Valid values:
   * 
   * *   **0**: no
   * *   **1**: yes
   * 
   * @example
   * 1
   */
  auditStatus?: number;
  /**
   * @remarks
   * Specifies whether to automatically trigger a re-scan after a rule is modified. Valid values:
   * 
   * *   **0**: no
   * *   **1**: yes
   * 
   * > When a re-scan is triggered, DSC scans all data in your data asset.
   * 
   * @example
   * 1
   */
  autoScan?: number;
  /**
   * @remarks
   * The permissions. Valid values:
   * 
   * *   **ReadOnly**: read-only permissions
   * *   **ReadWrite**: read and write permissions
   * 
   * @example
   * ReadOnly
   */
  certificatePermission?: string;
  /**
   * @remarks
   * Specifies whether to enable sensitive data detection. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * > If this is your first time to authorize DSC to access the data asset, the default value is 1. If this is not your first time to authorize DSC to access the data asset, the default value is the same as that used in the last authorization operation. Both 1 and 0 are possible.
   * 
   * @example
   * 1
   */
  enable?: number;
  /**
   * @remarks
   * The database engine that is run by the instance. Valid values:
   * 
   * *   **MySQL**
   * *   **SQLServer**
   * 
   * @example
   * MySQL
   */
  engineType?: string;
  /**
   * @remarks
   * Specifies whether to enable anomalous event detection. Valid values:
   * 
   * *   **0**: no
   * *   **1**: yes (default)
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
   * *   **false**
   * *   **true**
   * 
   * @example
   * false
   */
  instantlyScan?: boolean;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh_cn**. Valid values:
   * 
   * *   **zh_cn**: Chinese
   * *   **en_us**: English
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @remarks
   * The retention period of raw logs after you enable the security audit feature. Unit: days. Valid values:
   * 
   * *   **30**
   * *   **90**
   * *   **180**
   * *   **365**
   * 
   * @example
   * 30
   */
  logStoreDay?: number;
  /**
   * @remarks
   * Specifies whether to enable optical character recognition (OCR). Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * @example
   * 0
   */
  ocrStatus?: number;
  /**
   * @remarks
   * The name of the asset. The value is a connection string. It consists of an instance ID and a database name, which are separated by a comma (,). This parameter is required.
   * 
   * @example
   * test-11**
   */
  parentId?: string;
  /**
   * @remarks
   * The password that is used to access the database.
   * 
   * @example
   * passwd
   */
  password?: string;
  /**
   * @remarks
   * The port that is used to connect to the database.
   * 
   * @example
   * 3306
   */
  port?: number;
  /**
   * @remarks
   * The type of service to which the data asset belongs. Valid values:
   * 
   * *   **1** :MaxCompute
   * *   **2**: Object Storage Service (OSS)
   * *   **3**: AnalyticDB for MySQL
   * *   **4** :Tablestore
   * *   **5**: ApsaraDB RDS
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  resourceType?: number;
  /**
   * @remarks
   * The number of sensitive data samples that are collected after sensitive data detection is enabled. Valid values:
   * 
   * *   **0**
   * *   **5**
   * *   **10**
   * 
   * @example
   * 0
   */
  samplingSize?: number;
  /**
   * @remarks
   * The region in which the data asset resides. Valid values:
   * 
   * *   **cn-beijing**: China (Beijing).
   * *   **cn-zhangjiakou**: China (Zhangjiakou)
   * *   **cn-huhehaote**: China (Hohhot)
   * *   **cn-hangzhou**: China (Hangzhou)
   * *   **cn-shanghai**: China (Shanghai)
   * *   **cn-shenzhen**: China (Shenzhen)
   * *   **cn-hongkong**: China (Hong Kong)
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
   * 39.170.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The username that is used to access the database.
   * 
   * @example
   * yhm
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

