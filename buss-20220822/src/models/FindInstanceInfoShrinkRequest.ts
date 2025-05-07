// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FindInstanceInfoShrinkRequest extends $dara.Model {
  businessCodes?: string;
  bussinessCode?: string;
  domain?: string;
  endTime?: number;
  extrasShrink?: string;
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
      extrasShrink: 'extras',
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
      extrasShrink: 'string',
      ip: 'string',
      needDNS: 'boolean',
      startTime: 'number',
      url: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

