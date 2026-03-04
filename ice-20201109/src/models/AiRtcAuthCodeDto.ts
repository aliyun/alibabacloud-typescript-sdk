// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AiRtcAuthCodeDTO extends $dara.Model {
  /**
   * @example
   * 2024-01-01 06:57:43
   */
  activatedTime?: string;
  /**
   * @example
   * iU1IeJech7***
   */
  authCode?: string;
  /**
   * @example
   * 2023-12-23T13:33:49Z
   */
  creationTime?: string;
  /**
   * @example
   * device-***
   */
  deviceId?: string;
  /**
   * @remarks
   * license。
   * 
   * @example
   * a659a06659a***
   */
  license?: string;
  /**
   * @example
   * 11096067***
   */
  licenseItemId?: string;
  /**
   * @example
   * 2023-12-23T13:33:49Z
   */
  modificationTime?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      activatedTime: 'ActivatedTime',
      authCode: 'AuthCode',
      creationTime: 'CreationTime',
      deviceId: 'DeviceId',
      license: 'License',
      licenseItemId: 'LicenseItemId',
      modificationTime: 'ModificationTime',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activatedTime: 'string',
      authCode: 'string',
      creationTime: 'string',
      deviceId: 'string',
      license: 'string',
      licenseItemId: 'string',
      modificationTime: 'string',
      status: 'number',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

