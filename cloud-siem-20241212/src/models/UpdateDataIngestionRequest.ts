// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataIngestionRequest extends $dara.Model {
  dataIngestionId?: string;
  dataIngestionMode?: string;
  dataSourceId?: string;
  lang?: string;
  normalizationRuleId?: string;
  regionId?: string;
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

