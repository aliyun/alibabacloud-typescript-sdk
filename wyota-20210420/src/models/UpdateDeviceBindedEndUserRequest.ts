// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDeviceBindedEndUserRequestSourceAdEndUsers extends $dara.Model {
  adDomain?: string;
  directoryId?: string;
  endUserId?: string;
  static names(): { [key: string]: string } {
    return {
      adDomain: 'AdDomain',
      directoryId: 'DirectoryId',
      endUserId: 'EndUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adDomain: 'string',
      directoryId: 'string',
      endUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeviceBindedEndUserRequestTargetAdEndUsers extends $dara.Model {
  adDomain?: string;
  directoryId?: string;
  endUserId?: string;
  static names(): { [key: string]: string } {
    return {
      adDomain: 'AdDomain',
      directoryId: 'DirectoryId',
      endUserId: 'EndUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adDomain: 'string',
      directoryId: 'string',
      endUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeviceBindedEndUserRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  serialNo?: string;
  sourceAdEndUsers?: UpdateDeviceBindedEndUserRequestSourceAdEndUsers[];
  sourceEndUserIds?: string;
  targetAdEndUsers?: UpdateDeviceBindedEndUserRequestTargetAdEndUsers[];
  targetEndUserIds?: string;
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      serialNo: 'SerialNo',
      sourceAdEndUsers: 'SourceAdEndUsers',
      sourceEndUserIds: 'SourceEndUserIds',
      targetAdEndUsers: 'TargetAdEndUsers',
      targetEndUserIds: 'TargetEndUserIds',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serialNo: 'string',
      sourceAdEndUsers: { 'type': 'array', 'itemType': UpdateDeviceBindedEndUserRequestSourceAdEndUsers },
      sourceEndUserIds: 'string',
      targetAdEndUsers: { 'type': 'array', 'itemType': UpdateDeviceBindedEndUserRequestTargetAdEndUsers },
      targetEndUserIds: 'string',
      userType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sourceAdEndUsers)) {
      $dara.Model.validateArray(this.sourceAdEndUsers);
    }
    if(Array.isArray(this.targetAdEndUsers)) {
      $dara.Model.validateArray(this.targetAdEndUsers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

