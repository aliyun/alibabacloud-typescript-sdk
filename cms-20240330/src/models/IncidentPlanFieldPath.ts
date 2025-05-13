// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IncidentPlanFieldPath extends $dara.Model {
  fieldAlias?: string;
  fieldPath?: string[];
  static names(): { [key: string]: string } {
    return {
      fieldAlias: 'fieldAlias',
      fieldPath: 'fieldPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldAlias: 'string',
      fieldPath: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.fieldPath)) {
      $dara.Model.validateArray(this.fieldPath);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

