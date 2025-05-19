// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceRulesResponseBodyResourceRulesRuleItems extends $dara.Model {
  description?: string;
  maxValue?: string;
  minValue?: string;
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      maxValue: 'MaxValue',
      minValue: 'MinValue',
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      maxValue: 'string',
      minValue: 'string',
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

