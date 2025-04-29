// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyElasticityAssuranceAutoRenewAttributeRequestPrivatePoolOptions extends $dara.Model {
  /**
   * @remarks
   * The IDs of elasticity assurances.
   * 
   * >  You can renew up to 50 elasticity assurances at a time.
   */
  id?: string[];
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.id)) {
      $dara.Model.validateArray(this.id);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

