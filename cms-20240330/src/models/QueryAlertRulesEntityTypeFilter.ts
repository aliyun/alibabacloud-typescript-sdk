// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAlertRulesEntityTypeFilter extends $dara.Model {
  in?: string[];
  notIn?: string[];
  static names(): { [key: string]: string } {
    return {
      in: 'in',
      notIn: 'notIn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      in: { 'type': 'array', 'itemType': 'string' },
      notIn: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.in)) {
      $dara.Model.validateArray(this.in);
    }
    if(Array.isArray(this.notIn)) {
      $dara.Model.validateArray(this.notIn);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

