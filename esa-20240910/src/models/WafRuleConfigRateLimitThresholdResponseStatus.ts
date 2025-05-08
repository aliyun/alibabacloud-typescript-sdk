// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WafRuleConfigRateLimitThresholdResponseStatus extends $dara.Model {
  code?: number;
  count?: number;
  ratio?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      ratio: 'Ratio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      count: 'number',
      ratio: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

