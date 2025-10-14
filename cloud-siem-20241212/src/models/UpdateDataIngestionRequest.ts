// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataIngestionRequest extends $dara.Model {
  /**
   * @example
   * alibaba_cloud_actiontrail_event_ingestion_173326*******。
   */
  dataIngestionId?: string;
  /**
   * @example
   * realtime。
   */
  dataIngestionMode?: string;
  /**
   * @example
   * alibaba_cloud_actiontrail_event_log_173326*******。
   */
  dataSourceId?: string;
  /**
   * @example
   * zh。
   */
  lang?: string;
  /**
   * @example
   * alibaba_cloud_actiontrail_event_rule。
   */
  normalizationRuleId?: string;
  /**
   * @example
   * cn-hangzhou。
   */
  regionId?: string;
  /**
   * @example
   * 173326*******。
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

