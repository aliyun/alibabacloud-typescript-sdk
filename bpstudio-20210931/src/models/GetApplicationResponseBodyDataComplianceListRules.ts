// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApplicationResponseBodyDataComplianceListRules extends $dara.Model {
  ruleDetail?: string;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      ruleDetail: 'ruleDetail',
      ruleId: 'ruleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleDetail: 'string',
      ruleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

