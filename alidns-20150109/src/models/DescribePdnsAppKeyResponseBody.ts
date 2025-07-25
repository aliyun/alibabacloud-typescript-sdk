// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePdnsAppKeyResponseBodyAppKey extends $dara.Model {
  appKeyId?: string;
  appKeySecret?: string;
  createDate?: string;
  createTimestamp?: number;
  remark?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      appKeyId: 'AppKeyId',
      appKeySecret: 'AppKeySecret',
      createDate: 'CreateDate',
      createTimestamp: 'CreateTimestamp',
      remark: 'Remark',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKeyId: 'string',
      appKeySecret: 'string',
      createDate: 'string',
      createTimestamp: 'number',
      remark: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePdnsAppKeyResponseBody extends $dara.Model {
  appKey?: DescribePdnsAppKeyResponseBodyAppKey;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: DescribePdnsAppKeyResponseBodyAppKey,
      requestId: 'string',
    };
  }

  validate() {
    if(this.appKey && typeof (this.appKey as any).validate === 'function') {
      (this.appKey as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

