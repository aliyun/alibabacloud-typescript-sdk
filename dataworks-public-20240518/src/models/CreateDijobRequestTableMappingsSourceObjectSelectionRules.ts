// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDIJobRequestTableMappingsSourceObjectSelectionRules extends $dara.Model {
  action?: string;
  expression?: string;
  expressionType?: string;
  objectType?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      expression: 'Expression',
      expressionType: 'ExpressionType',
      objectType: 'ObjectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      expression: 'string',
      expressionType: 'string',
      objectType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

