// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceRequestComplianceMetadata extends $dara.Model {
  /**
   * @remarks
   * The compliance package selected.
   */
  compliancePacks?: string[];
  static names(): { [key: string]: string } {
    return {
      compliancePacks: 'CompliancePacks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePacks: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.compliancePacks)) {
      $dara.Model.validateArray(this.compliancePacks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

