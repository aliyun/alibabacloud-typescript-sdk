// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckSelectedDomainStatusResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 1567353497
   */
  deadDate?: number;
  /**
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @example
   * 1567353497
   */
  endTime?: number;
  premium?: boolean;
  /**
   * @example
   * 20.00
   */
  price?: number;
  /**
   * @example
   * 1566353497
   */
  regDate?: number;
  static names(): { [key: string]: string } {
    return {
      deadDate: 'DeadDate',
      domain: 'Domain',
      endTime: 'EndTime',
      premium: 'Premium',
      price: 'Price',
      regDate: 'RegDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deadDate: 'number',
      domain: 'string',
      endTime: 'number',
      premium: 'boolean',
      price: 'number',
      regDate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

