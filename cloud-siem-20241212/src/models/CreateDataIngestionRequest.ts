// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataIngestionRequest extends $dara.Model {
  /**
   * @remarks
   * The number of associated security capabilities.
   * 
   * @example
   * 10
   */
  capacityCount?: number;
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
   * The status code for data ingestion exceptions.
   * 
   * @example
   * UserUnauthorized
   */
  dataIngestionStateCode?: string;
  /**
   * @remarks
   * The data ingestion type. Valid values:
   * - preset
   * - custom
   * 
   * @example
   * custom
   */
  dataIngestionType?: string;
  /**
   * @remarks
   * Specifies whether the data source is editable.
   * 
   * @example
   * true
   */
  dataSourceEditable?: boolean;
  /**
   * @remarks
   * The data source ID.
   * > This parameter is required in practice. If you do not specify this parameter, the API returns a 400 error: "The specified DataSourceId is invalid."
   * Before calling this operation, call the CreateDataSource operation to create a data source and obtain the data source ID.
   * 
   * @example
   * ds-3g6lyf4eonngyohaq7tr
   */
  dataSourceId?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * - **zh** (default): Chinese.
   * - **en**: English.
   * > This parameter is required in practice. If you do not specify this parameter, the API returns a 400 error: "The specified Lang can not be empty."
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Specifies whether the normalization rule is editable.
   * 
   * @example
   * true
   */
  normalizationRuleEditable?: boolean;
  /**
   * @remarks
   * The normalization rule ID.
   * Before calling this operation, call the CreateNormalizationRule operation to create a normalization rule and obtain the normalization rule ID.
   * 
   * @example
   * nr-hdmady54piigkjfv17yp
   */
  normalizationRuleId?: string;
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
   * The region of the management center for threat analysis. Specify the management center based on the region where your assets reside. Valid values:
   * - cn-hangzhou: Your assets reside in the Chinese mainland.
   * - ap-southeast-1: Your assets reside outside China.
   * - cn-shanghai: The actual effective value. RegionId refers to the management center location, which is a different dimension from the API endpoint region (cn-shanghai).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the member to which the administrator switches the view.
   * 
   * @example
   * 173326*******
   */
  roleFor?: number;
  /**
   * @remarks
   * The data source ID for scan mode.
   * 
   * @example
   * ds-014frtpy28m5ct2eoyo1
   */
  scanDataSourceId?: string;
  /**
   * @remarks
   * The job ID of the stream task.
   * 
   * @example
   * 802c0129b6cfd50861d4b25deea29afb
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
      capacityCount: 'CapacityCount',
      dataIngestionMode: 'DataIngestionMode',
      dataIngestionStateCode: 'DataIngestionStateCode',
      dataIngestionType: 'DataIngestionType',
      dataSourceEditable: 'DataSourceEditable',
      dataSourceId: 'DataSourceId',
      lang: 'Lang',
      normalizationRuleEditable: 'NormalizationRuleEditable',
      normalizationRuleId: 'NormalizationRuleId',
      productId: 'ProductId',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      scanDataSourceId: 'ScanDataSourceId',
      streamJobId: 'StreamJobId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacityCount: 'number',
      dataIngestionMode: 'string',
      dataIngestionStateCode: 'string',
      dataIngestionType: 'string',
      dataSourceEditable: 'boolean',
      dataSourceId: 'string',
      lang: 'string',
      normalizationRuleEditable: 'boolean',
      normalizationRuleId: 'string',
      productId: 'string',
      regionId: 'string',
      roleFor: 'number',
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

