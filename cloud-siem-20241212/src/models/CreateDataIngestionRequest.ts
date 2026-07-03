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
   * The error code for the data ingestion status.
   * 
   * @example
   * UserUnauthorized
   */
  dataIngestionStateCode?: string;
  /**
   * @remarks
   * The data ingestion type. Valid values:
   * 
   * - preset
   * 
   * - custom
   * 
   * @example
   * custom
   */
  dataIngestionType?: string;
  /**
   * @remarks
   * Specifies whether the data source can be edited.
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
   * ds-3g6lyf4eonngyohaq7tr
   */
  dataSourceId?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - **zh** (default): Chinese.
   * 
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Specifies whether the normalization rule can be edited.
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
   * The region where the Data Management hub for threat analysis is located. Select a region for the management hub based on the region of your assets. Valid values:
   * 
   * - cn-hangzhou: Your assets are in the Chinese mainland.
   * 
   * - ap-southeast-1: Your assets are in a region outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of a member. An administrator can use this parameter to assume the permissions of the specified member.
   * 
   * @example
   * 173326*******
   */
  roleFor?: number;
  /**
   * @remarks
   * The ID of the data source for the scan mode.
   * 
   * @example
   * ds-014frtpy28m5ct2eoyo1
   */
  scanDataSourceId?: string;
  /**
   * @remarks
   * The ID of the stream job.
   * 
   * @example
   * 802c0129b6cfd50861d4b25deea29afb
   */
  streamJobId?: string;
  /**
   * @remarks
   * The update time.
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

