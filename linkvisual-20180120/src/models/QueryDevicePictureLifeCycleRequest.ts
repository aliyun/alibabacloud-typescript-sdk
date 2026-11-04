// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDevicePictureLifeCycleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the IPC device. The ID is issued by IoT Platform and uniquely identifies the device. You can call the IoT Platform [QueryDeviceDetail](https://help.aliyun.com/document_detail/69594.html) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * C47T6xwp6ms4bNlkHRWCg4****
   */
  iotId?: string;
  static names(): { [key: string]: string } {
    return {
      iotId: 'IotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

