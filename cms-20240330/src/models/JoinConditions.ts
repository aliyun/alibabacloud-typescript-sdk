// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class JoinConditions extends $dara.Model {
  lhsField?: string;
  operator?: string;
  rhsField?: string;
  static names(): { [key: string]: string } {
    return {
      lhsField: 'lhsField',
      operator: 'operator',
      rhsField: 'rhsField',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lhsField: 'string',
      operator: 'string',
      rhsField: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

