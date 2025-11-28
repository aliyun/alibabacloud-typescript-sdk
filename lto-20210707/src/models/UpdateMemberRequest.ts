// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMemberRequest extends $dara.Model {
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
  memberId?: string;
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
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      authorizedCount: 'AuthorizedCount',
      authorizedDeviceCount: 'AuthorizedDeviceCount',
      contactor: 'Contactor',
      memberId: 'MemberId',
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
      memberId: 'string',
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

