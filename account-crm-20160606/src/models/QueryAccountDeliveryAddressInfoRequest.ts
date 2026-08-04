// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAccountDeliveryAddressInfoRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  pk?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      pk: 'Pk',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      pk: 'string',
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

