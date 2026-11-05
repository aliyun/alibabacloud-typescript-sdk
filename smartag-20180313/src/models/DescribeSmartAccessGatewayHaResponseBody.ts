// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSmartAccessGatewayHaResponseBodyLinkBackupInfoListLinkBackupInfoList extends $dara.Model {
  backupLinkId?: string;
  backupLinkState?: string;
  linkLevelBackupState?: string;
  linkLevelBackupType?: string;
  mainLinkId?: string;
  mainLinkState?: string;
  static names(): { [key: string]: string } {
    return {
      backupLinkId: 'BackupLinkId',
      backupLinkState: 'BackupLinkState',
      linkLevelBackupState: 'LinkLevelBackupState',
      linkLevelBackupType: 'LinkLevelBackupType',
      mainLinkId: 'MainLinkId',
      mainLinkState: 'MainLinkState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupLinkId: 'string',
      backupLinkState: 'string',
      linkLevelBackupState: 'string',
      linkLevelBackupType: 'string',
      mainLinkId: 'string',
      mainLinkState: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewayHaResponseBodyLinkBackupInfoList extends $dara.Model {
  linkBackupInfoList?: DescribeSmartAccessGatewayHaResponseBodyLinkBackupInfoListLinkBackupInfoList[];
  static names(): { [key: string]: string } {
    return {
      linkBackupInfoList: 'LinkBackupInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      linkBackupInfoList: { 'type': 'array', 'itemType': DescribeSmartAccessGatewayHaResponseBodyLinkBackupInfoListLinkBackupInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.linkBackupInfoList)) {
      $dara.Model.validateArray(this.linkBackupInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewayHaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The serial number of the standby device.
   * 
   * @example
   * sag11axxxx
   */
  backupDeviceId?: string;
  /**
   * @remarks
   * The device-level backup state. Valid values:
   * 
   * - **ON**: Enabled.
   * - **OFF**: Disabled.
   * 
   * @example
   * OFF
   */
  deviceLevelBackupState?: string;
  /**
   * @remarks
   * The device-level high-availability type. Valid values:
   * 
   * - **warm_backup**: Active-active mode.
   * - **cold_backup**: Active-standby mode.
   * - **no_backup**: No backup.
   * 
   * @example
   * cold_backup
   */
  deviceLevelBackupType?: string;
  linkBackupInfoList?: DescribeSmartAccessGatewayHaResponseBodyLinkBackupInfoList;
  /**
   * @remarks
   * The serial number of the active device.
   * 
   * @example
   * sag11axxxx
   */
  mainDeviceId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 582FE511-FEFE-42BC-BBF4-4F8ECF92Exxx
   */
  requestId?: string;
  /**
   * @remarks
   * The instance ID of the Smart Access Gateway.
   * 
   * @example
   * sag-i8mogwi9kisigc3xxxx
   */
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      backupDeviceId: 'BackupDeviceId',
      deviceLevelBackupState: 'DeviceLevelBackupState',
      deviceLevelBackupType: 'DeviceLevelBackupType',
      linkBackupInfoList: 'LinkBackupInfoList',
      mainDeviceId: 'MainDeviceId',
      requestId: 'RequestId',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupDeviceId: 'string',
      deviceLevelBackupState: 'string',
      deviceLevelBackupType: 'string',
      linkBackupInfoList: DescribeSmartAccessGatewayHaResponseBodyLinkBackupInfoList,
      mainDeviceId: 'string',
      requestId: 'string',
      smartAGId: 'string',
    };
  }

  validate() {
    if(this.linkBackupInfoList && typeof (this.linkBackupInfoList as any).validate === 'function') {
      (this.linkBackupInfoList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

