// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProcessDefinitionWithScheduleRequestTaskDefinitionJsonTaskParamsLocalParams extends $dara.Model {
  direct?: string;
  prop?: string;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      direct: 'direct',
      prop: 'prop',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direct: 'string',
      prop: 'string',
      type: 'string',
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

