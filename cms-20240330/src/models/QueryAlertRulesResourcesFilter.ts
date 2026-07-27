// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAlertRulesResourcesFilter extends $dara.Model {
  contains?: string[];
  notContains?: string[];
  static names(): { [key: string]: string } {
    return {
      contains: 'contains',
      notContains: 'notContains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contains: { 'type': 'array', 'itemType': 'string' },
      notContains: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.contains)) {
      $dara.Model.validateArray(this.contains);
    }
    if(Array.isArray(this.notContains)) {
      $dara.Model.validateArray(this.notContains);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

