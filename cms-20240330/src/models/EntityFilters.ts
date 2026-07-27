// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EntityFilters extends $dara.Model {
  field?: string;
  operator?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      field: 'field',
      operator: 'operator',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: 'string',
      operator: 'string',
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

