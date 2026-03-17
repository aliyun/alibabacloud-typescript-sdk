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
   * The serial number of the standby SAG device.
   * 
   * @example
   * sag11axxxx
   */
  backupDeviceId?: string;
  /**
   * @remarks
   * Indicates whether device-based HA is enabled. Valid values:
   * 
   * *   **ON**: enabled
   * *   **OFF**: disabled
   * 
   * @example
   * OFF
   */
  deviceLevelBackupState?: string;
  /**
   * @remarks
   * The deployment mode of the SAG devices that have HA enabled. Valid values:
   * 
   * *   **warm_backup**: active-active mode.
   * *   **cold_backup**: active-standby mode.
   * *   **no_backup**: HA is disabled.
   * 
   * @example
   * cold_backup
   */
  deviceLevelBackupType?: string;
  linkBackupInfoList?: DescribeSmartAccessGatewayHaResponseBodyLinkBackupInfoList;
  /**
   * @remarks
   * The serial number of the active SAG device.
   * 
   * @example
   * sag11axxxx
   */
  mainDeviceId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 582FE511-FEFE-42BC-BBF4-4F8ECF92Exxx
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the SAG instance.
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

