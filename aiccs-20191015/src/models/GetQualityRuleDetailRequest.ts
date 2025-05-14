// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQualityRuleDetailRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  qualityRuleId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      qualityRuleId: 'QualityRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      qualityRuleId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

