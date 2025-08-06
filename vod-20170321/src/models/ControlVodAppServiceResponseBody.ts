// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ControlVodAppServiceResponseBody extends $dara.Model {
  appServiceStatus?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appServiceStatus: 'AppServiceStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appServiceStatus: 'string',
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

