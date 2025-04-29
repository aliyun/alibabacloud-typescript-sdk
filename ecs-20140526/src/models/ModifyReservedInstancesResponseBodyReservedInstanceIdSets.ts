// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyReservedInstancesResponseBodyReservedInstanceIdSets extends $dara.Model {
  reservedInstanceId?: string[];
  static names(): { [key: string]: string } {
    return {
      reservedInstanceId: 'ReservedInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reservedInstanceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.reservedInstanceId)) {
      $dara.Model.validateArray(this.reservedInstanceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

