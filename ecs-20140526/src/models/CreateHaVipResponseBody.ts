// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHaVipResponseBody extends $dara.Model {
  haVipId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      haVipId: 'HaVipId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      haVipId: 'string',
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

