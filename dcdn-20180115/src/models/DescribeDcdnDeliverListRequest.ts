// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnDeliverListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the tracking task that you want to query. If you do not specify an ID, all tracking tasks are queried.
   * 
   * @example
   * 92
   */
  deliverId?: number;
  static names(): { [key: string]: string } {
    return {
      deliverId: 'DeliverId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliverId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

