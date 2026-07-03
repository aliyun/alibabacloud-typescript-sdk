// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataIngestionRequest extends $dara.Model {
  /**
   * @remarks
   * The data ingestion ID.
   * 
   * @example
   * alibaba_cloud_actiontrail_event_ingestion_173326*******
   */
  dataIngestionId?: string;
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
   * The data source ID.
   * 
   * @example
   * alibaba_cloud_actiontrail_event_log_173326*******
   */
  dataSourceId?: string;
  /**
   * @remarks
   * The language of the response messages. Valid values:
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
   * The normalization rule ID.
   * 
   * @example
   * alibaba_cloud_actiontrail_event_rule
   */
  normalizationRuleId?: string;
  /**
   * @remarks
   * The region of the Data Management center for threat analysis. Select the region where your assets are located. Valid values:
   * 
   * - cn-hangzhou: The assets are in the Chinese mainland.
   * 
   * - ap-southeast-1: The assets are in a region outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of a member. An administrator can perform operations on behalf of this member.
   * 
   * @example
   * 173326*******
   */
  roleFor?: number;
  static names(): { [key: string]: string } {
    return {
      dataIngestionId: 'DataIngestionId',
      dataIngestionMode: 'DataIngestionMode',
      dataSourceId: 'DataSourceId',
      lang: 'Lang',
      normalizationRuleId: 'NormalizationRuleId',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataIngestionId: 'string',
      dataIngestionMode: 'string',
      dataSourceId: 'string',
      lang: 'string',
      normalizationRuleId: 'string',
      regionId: 'string',
      roleFor: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

