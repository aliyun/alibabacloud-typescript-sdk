// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTotalStatisResponseBody extends $dara.Model {
  networkOut?: number;
  requestId?: string;
  storageUtilization?: number;
  transcodeDuration?: number;
  static names(): { [key: string]: string } {
    return {
      networkOut: 'NetworkOut',
      requestId: 'RequestId',
      storageUtilization: 'StorageUtilization',
      transcodeDuration: 'TranscodeDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkOut: 'number',
      requestId: 'string',
      storageUtilization: 'number',
      transcodeDuration: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

