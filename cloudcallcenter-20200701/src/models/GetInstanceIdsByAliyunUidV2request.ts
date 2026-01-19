// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceIdsByAliyunUidV2Request extends $dara.Model {
  aliyunUid?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunUid: 'AliyunUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunUid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

