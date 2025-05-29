// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDeviceChannelsResponseBody extends $dara.Model {
  /**
   * @example
   * 8F4D95B6-EB19-5245-AD77-95EDA83E53B7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

