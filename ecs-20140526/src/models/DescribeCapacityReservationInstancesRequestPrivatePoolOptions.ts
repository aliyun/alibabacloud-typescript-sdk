// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCapacityReservationInstancesRequestPrivatePoolOptions extends $dara.Model {
  /**
   * @remarks
   * The ID of the capacity reservation.
   * 
   * This parameter is required.
   * 
   * @example
   * crp-bp67acfmxazb4****
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

