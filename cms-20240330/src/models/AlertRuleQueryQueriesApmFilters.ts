// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AlertRuleQueryQueriesApmFilters extends $dara.Model {
  dim?: string;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      dim: 'dim',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dim: 'string',
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

