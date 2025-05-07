// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BusinessCategoryBasicInfo extends $dara.Model {
  bid?: number;
  name?: string;
  originalId?: number;
  serviceType?: number;
  static names(): { [key: string]: string } {
    return {
      bid: 'Bid',
      name: 'Name',
      originalId: 'OriginalId',
      serviceType: 'ServiceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bid: 'number',
      name: 'string',
      originalId: 'number',
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

