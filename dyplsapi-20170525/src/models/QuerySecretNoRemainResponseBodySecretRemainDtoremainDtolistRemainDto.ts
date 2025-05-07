// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySecretNoRemainResponseBodySecretRemainDTORemainDTOListRemainDTO extends $dara.Model {
  /**
   * @remarks
   * The quantity of remaining phone numbers available for online purchase for the city.
   * 
   * @example
   * 120
   */
  amount?: number;
  /**
   * @remarks
   * The home location of the phone numbers.
   * 
   * @example
   * Wuhan
   */
  city?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      city: 'City',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      city: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

