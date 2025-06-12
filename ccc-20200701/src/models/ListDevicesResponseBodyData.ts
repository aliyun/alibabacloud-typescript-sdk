// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDevicesResponseBodyData extends $dara.Model {
  /**
   * @example
   * d7b818c3-8d3a-732f-bc9e-1782wa16****
   */
  callId?: string;
  /**
   * @example
   * sip:8032****@33.89.XX.XX:64189;transport=tcp;registering_acc=18_134_23_4
   */
  contact?: string;
  /**
   * @example
   * ACC-YUNBS-1.0.10-****
   */
  deviceId?: string;
  deviceType?: string;
  /**
   * @example
   * 1609118499750
   */
  expires?: number;
  /**
   * @example
   * 8032****
   */
  extension?: string;
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * agent@ccc-test
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      contact: 'Contact',
      deviceId: 'DeviceId',
      deviceType: 'DeviceType',
      expires: 'Expires',
      extension: 'Extension',
      instanceId: 'InstanceId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      contact: 'string',
      deviceId: 'string',
      deviceType: 'string',
      expires: 'number',
      extension: 'string',
      instanceId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

