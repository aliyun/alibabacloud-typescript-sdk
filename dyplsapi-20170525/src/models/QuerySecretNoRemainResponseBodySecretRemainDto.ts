// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuerySecretNoRemainResponseBodySecretRemainDTORemainDTOList } from "./QuerySecretNoRemainResponseBodySecretRemainDtoremainDtolist";


export class QuerySecretNoRemainResponseBodySecretRemainDTO extends $dara.Model {
  /**
   * @remarks
   * The quantity of remaining phone numbers available for online purchase.
   * 
   * @example
   * 0
   */
  amount?: number;
  /**
   * @remarks
   * The home location of the phone numbers.
   * 
   * @example
   * hangzhou
   */
  city?: string;
  /**
   * @remarks
   * The information about remaining phone numbers available for online purchase.
   */
  remainDTOList?: QuerySecretNoRemainResponseBodySecretRemainDTORemainDTOList;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      city: 'City',
      remainDTOList: 'RemainDTOList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      city: 'string',
      remainDTOList: QuerySecretNoRemainResponseBodySecretRemainDTORemainDTOList,
    };
  }

  validate() {
    if(this.remainDTOList && typeof (this.remainDTOList as any).validate === 'function') {
      (this.remainDTOList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

