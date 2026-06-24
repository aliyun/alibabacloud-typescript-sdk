// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataLimitRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auditing. Valid values:
   * 
   * - **0**: Do not enable auditing.
   * 
   * - **1**: Enable auditing.
   * 
   * @example
   * 1
   */
  auditStatus?: number;
  /**
   * @remarks
   * Specifies whether to automatically trigger a rescan when a rule changes. Valid values:
   * 
   * - **0**: Do not trigger an automatic scan.
   * 
   * - **1**: Trigger an automatic scan.
   * 
   * > If you enable this feature, a rule change triggers a full scan of all data in the data source.
   * 
   * @example
   * 1
   */
  autoScan?: number;
  /**
   * @remarks
   * The permission level of the credential. Valid values:
   * 
   * - **ReadOnly**: Read-only permissions.
   * 
   * - **ReadWrite**: Read and write permissions.
   * 
   * @example
   * ReadOnly
   */
  certificatePermission?: string;
  /**
   * @remarks
   * Specifies whether to enable sensitive data detection. Valid values:
   * 
   * - **1**: Enabled.
   * 
   * - **0**: Disabled.
   * 
   * > The default value is 1 for the first authorization. For later authorizations, the value from the previous authorization is used. Set this parameter to 1 to detect sensitive data.
   * 
   * @example
   * 1
   */
  enable?: number;
  /**
   * @remarks
   * The database engine type. Valid values:
   * 
   * - **MySQL**
   * 
   * - **SQLServer**
   * 
   * @example
   * MySQL
   */
  engineType?: string;
  /**
   * @remarks
   * Specifies whether to enable anomalous activity detection. Valid values:
   * 
   * - **0**: Disabled.
   * 
   * - **1**: Enabled. This is the default value.
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
   * Specifies whether to immediately scan the authorized data asset. Valid values:
   * 
   * - **false**: Do not scan immediately.
   * 
   * - **true**: Scan immediately.
   * 
   * @example
   * false
   */
  instantlyScan?: boolean;
  /**
   * @remarks
   * The language of the content that is returned in the response. Default value: **zh_cn**. Valid values:
   * 
   * - **zh_cn**: Chinese
   * 
   * - **en_us**: English
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @remarks
   * The retention period of raw logs after you enable auditing. Unit: days. Valid values:
   * 
   * - **30**
   * 
   * - **90**
   * 
   * - **180**
   * 
   * - **365**
   * 
   * @example
   * 30
   */
  logStoreDay?: number;
  /**
   * @remarks
   * Specifies whether to enable Optical Character Recognition (OCR). Valid values:
   * 
   * - **1**: Enabled.
   * 
   * - **0**: Disabled.
   * 
   * @example
   * 0
   */
  ocrStatus?: number;
  /**
   * @remarks
   * The name of the data asset. The name consists of the instance ID and the database name, separated by a period (.).
   * 
   * @example
   * rm-****34.******name
   */
  parentId?: string;
  /**
   * @remarks
   * The password to access the database.
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
   * The service to which the data asset belongs. Valid values:
   * 
   * - **1**: MaxCompute
   * 
   * - **2**: OSS
   * 
   * - **3**: ADS
   * 
   * - **4**: OTS
   * 
   * - **5**: RDS
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  resourceType?: number;
  /**
   * @remarks
   * The number of sensitive data samples to return after a scan. Valid values:
   * 
   * - **0**
   * 
   * - **5**
   * 
   * - **10**
   * 
   * > The default value is 10.
   * 
   * @example
   * 0
   */
  samplingSize?: number;
  /**
   * @remarks
   * The region where the data asset is located. Valid values:
   * 
   * - **cn-beijing**: China (Beijing)
   * 
   * - **cn-zhangjiakou**: China (Zhangjiakou)
   * 
   * - **cn-huhehaote**: China (Hohhot)
   * 
   * - **cn-hangzhou**: China (Hangzhou)
   * 
   * - **cn-shanghai**: China (Shanghai)
   * 
   * - **cn-shenzhen**: China (Shenzhen)
   * 
   * - **cn-hongkong**: China (Hong Kong)
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
   * The username for the database.
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

