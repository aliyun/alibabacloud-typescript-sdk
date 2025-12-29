// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInfraredRemoteControllersRequest extends $dara.Model {
  brand?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  category?: string;
  city?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * af7***536
   */
  hotelId?: string;
  province?: string;
  serviceProvider?: string;
  static names(): { [key: string]: string } {
    return {
      brand: 'Brand',
      category: 'Category',
      city: 'City',
      hotelId: 'HotelId',
      province: 'Province',
      serviceProvider: 'ServiceProvider',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brand: 'string',
      category: 'string',
      city: 'string',
      hotelId: 'string',
      province: 'string',
      serviceProvider: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

