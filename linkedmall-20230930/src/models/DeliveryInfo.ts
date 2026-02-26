// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeliveryInfo extends $dara.Model {
  displayName?: string;
  /**
   * @example
   * 20
   */
  id?: string;
  /**
   * @example
   * 0
   */
  postFee?: number;
  /**
   * @remarks
   * serviceType
   * 
   * @example
   * -4
   */
  serviceType?: number;
  static names(): { [key: string]: string } {
    return {
      displayName: 'displayName',
      id: 'id',
      postFee: 'postFee',
      serviceType: 'serviceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      id: 'string',
      postFee: 'number',
      serviceType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

