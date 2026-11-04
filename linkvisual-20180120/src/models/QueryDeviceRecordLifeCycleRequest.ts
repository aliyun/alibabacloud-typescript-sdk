// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDeviceRecordLifeCycleRequest extends $dara.Model {
  /**
   * @remarks
   * The list of IoT IDs of the IPC devices. An IoT ID is a unique identifier issued by IoT Platform for a device. You can call the IoT Platform [QueryDeviceDetail](https://help.aliyun.com/document_detail/69594.html) operation to query the IoT ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ["C47T6xwp6ms4bNlkHRWCg4****", "d7XmBoJhAr88C6PelXDF00****"]
   */
  deviceList?: string[];
  static names(): { [key: string]: string } {
    return {
      deviceList: 'DeviceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.deviceList)) {
      $dara.Model.validateArray(this.deviceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

