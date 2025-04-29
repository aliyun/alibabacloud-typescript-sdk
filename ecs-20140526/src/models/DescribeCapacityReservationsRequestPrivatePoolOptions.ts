// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCapacityReservationsRequestPrivatePoolOptions extends $dara.Model {
  /**
   * @remarks
   * The IDs of capacity reservations. The value can be a JSON array that consists of up to 100 capacity reservation IDs. Separate the IDs with commas (,).
   * 
   * @example
   * ["crp-bp1gubrkqutenqdd****", "crp-bp67acfmxazb5****"]
   */
  ids?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

