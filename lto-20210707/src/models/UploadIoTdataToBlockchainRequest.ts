// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadIoTDataToBlockchainRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  iotAuthType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  iotDataDID?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  iotDataDigest?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  iotDataToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  iotId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  iotIdServiceProvider?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  iotIdSource?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  plainData?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  privacyData?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      iotAuthType: 'IotAuthType',
      iotDataDID: 'IotDataDID',
      iotDataDigest: 'IotDataDigest',
      iotDataToken: 'IotDataToken',
      iotId: 'IotId',
      iotIdServiceProvider: 'IotIdServiceProvider',
      iotIdSource: 'IotIdSource',
      plainData: 'PlainData',
      privacyData: 'PrivacyData',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotAuthType: 'string',
      iotDataDID: 'string',
      iotDataDigest: 'string',
      iotDataToken: 'string',
      iotId: 'string',
      iotIdServiceProvider: 'string',
      iotIdSource: 'string',
      plainData: 'string',
      privacyData: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

