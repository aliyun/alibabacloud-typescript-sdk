// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenServiceGroupForServiceCmd extends $dara.Model {
  companyId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  laneId?: number;
  serviceIds?: number[];
  static names(): { [key: string]: string } {
    return {
      companyId: 'companyId',
      laneId: 'laneId',
      serviceIds: 'serviceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyId: 'number',
      laneId: 'number',
      serviceIds: { 'type': 'array', 'itemType': 'number' },
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

