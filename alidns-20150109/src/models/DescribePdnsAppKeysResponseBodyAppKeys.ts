// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePdnsAppKeysResponseBodyAppKeys extends $dara.Model {
  appKeyId?: string;
  createDate?: string;
  createTimestamp?: number;
  remark?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      appKeyId: 'AppKeyId',
      createDate: 'CreateDate',
      createTimestamp: 'CreateTimestamp',
      remark: 'Remark',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKeyId: 'string',
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

