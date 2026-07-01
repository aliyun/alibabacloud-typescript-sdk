// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AiRtcAuthCodeDTO extends $dara.Model {
  /**
   * @remarks
   * Activation time.
   * 
   * @example
   * 2024-01-01 06:57:43
   */
  activatedTime?: string;
  /**
   * @remarks
   * Authorization code.
   * 
   * @example
   * iU1IeJech7***
   */
  authCode?: string;
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 2023-12-23T13:33:49Z
   */
  creationTime?: string;
  /**
   * @remarks
   * Device ID.
   * 
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
   * @remarks
   * Batch ID.
   * 
   * @example
   * 11096067***
   */
  licenseItemId?: string;
  /**
   * @remarks
   * Update time.
   * 
   * @example
   * 2023-12-23T13:33:49Z
   */
  modificationTime?: string;
  /**
   * @remarks
   * Status:
   * 
   * - 1 - Activated
   * - 2 - Not activated
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * Type:
   * 
   * - 1 - Voice call
   * - 2 - Visual understanding
   * 
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

