// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataIngestionTemplateRequest extends $dara.Model {
  dataIngestionStatus?: string;
  dataIngestionTemplateId?: string;
  dataIngestionTemplateName?: string;
  lang?: string;
  normalizationRuleId?: string;
  regionId?: string;
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

