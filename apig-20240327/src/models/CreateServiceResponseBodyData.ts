// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of service IDs.
   */
  serviceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      serviceIds: 'serviceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.serviceIds)) {
      $dara.Model.validateArray(this.serviceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

