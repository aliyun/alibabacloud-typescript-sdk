// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssumeOssRoleResponseBody extends $dara.Model {
  ossAuthResult?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ossAuthResult: 'OssAuthResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossAuthResult: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

