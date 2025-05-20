// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataCName extends $dara.Model {
  certExpireTime?: number;
  certName?: string;
  cname?: string;
  cnameType?: string;
  location?: string;
  storeId?: string;
  static names(): { [key: string]: string } {
    return {
      certExpireTime: 'cert_expire_time',
      certName: 'cert_name',
      cname: 'cname',
      cnameType: 'cname_type',
      location: 'location',
      storeId: 'store_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certExpireTime: 'number',
      certName: 'string',
      cname: 'string',
      cnameType: 'string',
      location: 'string',
      storeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

