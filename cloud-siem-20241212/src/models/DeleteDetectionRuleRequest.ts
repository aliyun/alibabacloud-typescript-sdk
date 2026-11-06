// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDetectionRuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  detectionRuleId?: string;
  lang?: string;
  regionId?: string;
  roleFor?: number;
  static names(): { [key: string]: string } {
    return {
      detectionRuleId: 'DetectionRuleId',
      lang: 'Lang',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detectionRuleId: 'string',
      lang: 'string',
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

