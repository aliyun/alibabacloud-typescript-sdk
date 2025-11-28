// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddMemberRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  authorizedCount?: number;
  authorizedDeviceCount?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  contactor?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  regionId?: string;
  remark?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  telephony?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      authorizedCount: 'AuthorizedCount',
      authorizedDeviceCount: 'AuthorizedDeviceCount',
      contactor: 'Contactor',
      name: 'Name',
      regionId: 'RegionId',
      remark: 'Remark',
      telephony: 'Telephony',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizedCount: 'number',
      authorizedDeviceCount: 'number',
      contactor: 'string',
      name: 'string',
      regionId: 'string',
      remark: 'string',
      telephony: 'string',
      uid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

