// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SlsMultiConditionCaseConfig extends $dara.Model {
  countOperator?: string;
  countThreshold?: number;
  matchField?: string;
  matchOperator?: string;
  matchValue?: string;
  severity?: string;
  static names(): { [key: string]: string } {
    return {
      countOperator: 'countOperator',
      countThreshold: 'countThreshold',
      matchField: 'matchField',
      matchOperator: 'matchOperator',
      matchValue: 'matchValue',
      severity: 'severity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      countOperator: 'string',
      countThreshold: 'number',
      matchField: 'string',
      matchOperator: 'string',
      matchValue: 'string',
      severity: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

