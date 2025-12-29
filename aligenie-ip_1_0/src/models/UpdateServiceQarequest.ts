// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServiceQARequest extends $dara.Model {
  answer?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * af7***536
   */
  hotelId?: string;
  /**
   * @example
   * 1
   */
  serviceQAId?: number;
  /**
   * @example
   * true
   */
  isActive?: boolean;
  static names(): { [key: string]: string } {
    return {
      answer: 'Answer',
      hotelId: 'HotelId',
      serviceQAId: 'ServiceQAId',
      isActive: 'isActive',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answer: 'string',
      hotelId: 'string',
      serviceQAId: 'number',
      isActive: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

