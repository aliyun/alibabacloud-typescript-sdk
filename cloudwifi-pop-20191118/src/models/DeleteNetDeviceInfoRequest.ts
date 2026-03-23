// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteNetDeviceInfoRequest extends $dara.Model {
  appCode?: string;
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  ids?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      appName: 'AppName',
      ids: 'Ids',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      appName: 'string',
      ids: 'string',
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

