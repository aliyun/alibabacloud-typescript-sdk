// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBusinessCategoryListResponseBodyDataBusinessCategoryBasicInfo extends $dara.Model {
  /**
   * @example
   * 0
   */
  bid?: number;
  businessName?: string;
  /**
   * @example
   * 0
   */
  serviceType?: number;
  static names(): { [key: string]: string } {
    return {
      bid: 'Bid',
      businessName: 'BusinessName',
      serviceType: 'ServiceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bid: 'number',
      businessName: 'string',
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

