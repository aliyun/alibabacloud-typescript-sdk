// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteNormalizationRuleRequest extends $dara.Model {
  lang?: string;
  normalizationRuleId?: string;
  regionId?: string;
  roleFor?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      normalizationRuleId: 'NormalizationRuleId',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

