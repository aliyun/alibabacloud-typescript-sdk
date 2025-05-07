// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FindInstanceInfoRequest extends $dara.Model {
  businessCodes?: string;
  bussinessCode?: string;
  domain?: string;
  endTime?: number;
  extras?: { [key: string]: any };
  ip?: string;
  needDNS?: boolean;
  startTime?: number;
  url?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      businessCodes: 'businessCodes',
      bussinessCode: 'bussinessCode',
      domain: 'domain',
      endTime: 'endTime',
      extras: 'extras',
      ip: 'ip',
      needDNS: 'needDNS',
      startTime: 'startTime',
      url: 'url',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessCodes: 'string',
      bussinessCode: 'string',
      domain: 'string',
      endTime: 'number',
      extras: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      ip: 'string',
      needDNS: 'boolean',
      startTime: 'number',
      url: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(this.extras) {
      $dara.Model.validateMap(this.extras);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

