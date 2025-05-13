// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddonMetaEnvironmentsPoliciesMetricCheckRule extends $dara.Model {
  promQL?: string[];
  static names(): { [key: string]: string } {
    return {
      promQL: 'promQL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      promQL: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.promQL)) {
      $dara.Model.validateArray(this.promQL);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

