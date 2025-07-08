// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuerySmsSignLastRangeNewResponseBodyListSmsSign } from "./QuerySmsSignLastRangeNewResponseBodyListSmsSign";


export class QuerySmsSignLastRangeNewResponseBodyList extends $dara.Model {
  smsSign?: QuerySmsSignLastRangeNewResponseBodyListSmsSign[];
  static names(): { [key: string]: string } {
    return {
      smsSign: 'SmsSign',
    };
  }

  static types(): { [key: string]: any } {
    return {
      smsSign: { 'type': 'array', 'itemType': QuerySmsSignLastRangeNewResponseBodyListSmsSign },
    };
  }

  validate() {
    if(Array.isArray(this.smsSign)) {
      $dara.Model.validateArray(this.smsSign);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

