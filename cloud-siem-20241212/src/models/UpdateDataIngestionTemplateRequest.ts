// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataIngestionTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The status of data ingestion. Valid values:
   * 
   * - enabled: Enabled.
   * 
   * - disabled: Disabled.
   * 
   * @example
   * enabled
   */
  dataIngestionStatus?: string;
  /**
   * @remarks
   * The ID of the data ingestion template.
   * 
   * @example
   * alibaba_cloud_actiontrail_event_ingestion_173326*******
   */
  dataIngestionTemplateId?: string;
  /**
   * @remarks
   * The name of the data source template.
   * 
   * @example
   * alibaba_cloud_actiontrail_event_ingestion_173326*******
   */
  dataIngestionTemplateName?: string;
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
   * The ID of the normalization rule.
   * 
   * @example
   * alibaba_cloud_actiontrail_event_rule
   */
  normalizationRuleId?: string;
  /**
   * @remarks
   * The region where the Data Management center for threat analysis is located. Select a region for the management center based on the region of your asset. Valid values:
   * 
   * - cn-hangzhou: The asset is in the Chinese mainland.
   * 
   * - ap-southeast-1: The asset is outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of the member. This parameter is used by an administrator to switch to the perspective of the member.
   * 
   * @example
   * 173326*******
   */
  roleFor?: number;
  static names(): { [key: string]: string } {
    return {
      dataIngestionStatus: 'DataIngestionStatus',
      dataIngestionTemplateId: 'DataIngestionTemplateId',
      dataIngestionTemplateName: 'DataIngestionTemplateName',
      lang: 'Lang',
      normalizationRuleId: 'NormalizationRuleId',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataIngestionStatus: 'string',
      dataIngestionTemplateId: 'string',
      dataIngestionTemplateName: 'string',
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

