// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCustomerInformationRequest extends $dara.Model {
  biz?: string;
  customerCategory?: string;
  customerSubCategory?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userId?: number;
  website?: string;
  static names(): { [key: string]: string } {
    return {
      biz: 'Biz',
      customerCategory: 'CustomerCategory',
      customerSubCategory: 'CustomerSubCategory',
      userId: 'UserId',
      website: 'Website',
    };
  }

  static types(): { [key: string]: any } {
    return {
      biz: 'string',
      customerCategory: 'string',
      customerSubCategory: 'string',
      userId: 'number',
      website: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

