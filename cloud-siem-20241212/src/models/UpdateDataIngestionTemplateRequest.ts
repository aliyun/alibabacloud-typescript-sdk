// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataIngestionTemplateRequest extends $dara.Model {
  /**
   * @example
   * enabled。
   */
  dataIngestionStatus?: string;
  /**
   * @example
   * alibaba_cloud_actiontrail_event_ingestion_173326*******。
   */
  dataIngestionTemplateId?: string;
  /**
   * @example
   * alibaba_cloud_actiontrail_event_ingestion_173326*******。
   */
  dataIngestionTemplateName?: string;
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

