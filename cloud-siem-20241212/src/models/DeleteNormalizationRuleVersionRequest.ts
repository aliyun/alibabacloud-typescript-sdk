// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteNormalizationRuleVersionRequest extends $dara.Model {
  lang?: string;
  normalizationRuleId?: string;
  normalizationRuleVersion?: number;
  regionId?: string;
  roleFor?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      normalizationRuleId: 'NormalizationRuleId',
      normalizationRuleVersion: 'NormalizationRuleVersion',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      normalizationRuleId: 'string',
      normalizationRuleVersion: 'number',
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

