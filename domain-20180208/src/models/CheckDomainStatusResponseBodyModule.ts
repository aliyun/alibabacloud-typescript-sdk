// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckDomainStatusResponseBodyModule extends $dara.Model {
  deadDate?: number;
  domain?: string;
  endTime?: number;
  price?: number;
  regDate?: number;
  static names(): { [key: string]: string } {
    return {
      deadDate: 'DeadDate',
      domain: 'Domain',
      endTime: 'EndTime',
      price: 'Price',
      regDate: 'RegDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deadDate: 'number',
      domain: 'string',
      endTime: 'number',
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

