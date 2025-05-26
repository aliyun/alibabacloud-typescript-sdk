// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDRMLicenseResponseBody extends $dara.Model {
  /**
   * @example
   * IEEE1284DeviceID
   */
  deviceInfo?: string;
  /**
   * @example
   * AESzB8SQgpACioSEJ3yqiFwruAOUgIvlCx*****
   */
  license?: string;
  /**
   * @example
   * 896ABAD1-C452-4BED-B5E0-302955F*****
   */
  requestId?: string;
  /**
   * @example
   * 200
   */
  states?: number;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      license: 'License',
      requestId: 'RequestId',
      states: 'States',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: 'string',
      license: 'string',
      requestId: 'string',
      states: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

