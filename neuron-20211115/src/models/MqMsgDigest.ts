// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MqMsgDigest extends $dara.Model {
  id?: number;
  retryCount?: number;
  storeSize?: number;
  storeTime?: string;
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      retryCount: 'RetryCount',
      storeSize: 'StoreSize',
      storeTime: 'StoreTime',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      retryCount: 'number',
      storeSize: 'number',
      storeTime: 'string',
      tags: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

