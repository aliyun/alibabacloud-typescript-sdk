// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDesktopsInGroupResponseBodyPaidDesktops extends $dara.Model {
  /**
   * @remarks
   * The connection status of the cloud computer.
   * 
   * Valid values:
   * 
   * *   Unknown
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Connected
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Disconnected
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * Connected
   */
  connectionStatus?: string;
  /**
   * @remarks
   * The ID of the cloud computer.
   * 
   * @example
   * ud-7ftf5b6yu77b0****
   */
  desktopId?: string;
  /**
   * @remarks
   * The name of the cloud computer.
   * 
   * @example
   * testName
   */
  desktopName?: string;
  /**
   * @remarks
   * The status of the cloud computer.
   * 
   * Valid values:
   * 
   * *   Stopped
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Starting
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Rebuilding
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Running
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Stopping
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Expired
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Deleted
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Pending
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * Running
   */
  desktopStatus?: string;
  /**
   * @remarks
   * The type of the disk.
   * 
   * Valid values:
   * 
   * *   SYSTEM: system disk
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   DATA: data disk
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * SYSTEM
   */
  diskType?: string;
  /**
   * @remarks
   * The ID of the authorized user.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @remarks
   * The IDs of the end users who are connected to the cloud computers in the cloud computer share. If no end users are connected, no values are returned for this parameter.
   */
  endUserIds?: string[];
  /**
   * @remarks
   * The username of the authorized user.
   * 
   * @example
   * alice
   */
  endUserName?: string;
  /**
   * @remarks
   * The usernames of the end users who are connected to the cloud computers in the cloud computer share. If no end users are connected, no values are returned for this parameter.
   */
  endUserNames?: string[];
  /**
   * @remarks
   * The image version.
   * 
   * @example
   * 0.1.0-R-20220914.17****
   */
  fotaVersion?: string;
  /**
   * @remarks
   * The version of the GPU driver.
   * 
   * @example
   * 1.0
   */
  gpuDriverVersion?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * m-hn5v2mmk0****
   */
  imageId?: string;
  /**
   * @remarks
   * The image name.
   * 
   * @example
   * Win10_ZC
   */
  imageName?: string;
  /**
   * @remarks
   * The flag that is used to manage the cloud computer.
   * 
   * Valid values:
   * 
   * *   Updating: The configurations of the cloud computer are being updated.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   NoFlag: No flags are attached to the cloud computer.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * NoFlag
   */
  managementFlag?: string;
  /**
   * @remarks
   * The flags that are used to manage the cloud computers.
   */
  managementFlags?: string[];
  /**
   * @remarks
   * The IP address of the member network interface controller (NIC) of the instance.
   * 
   * @example
   * 192.168.XX.XX
   */
  memberEniIp?: string;
  /**
   * @remarks
   * The OS.
   * 
   * Valid values:
   * 
   * *   Linux
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Windows
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @remarks
   * The IP address of the primary NIC of the instance.
   * 
   * @example
   * 192.168.XX.XX
   */
  primaryEniIp?: string;
  /**
   * @remarks
   * The protocol.
   * 
   * Valid values:
   * 
   * *   HDX: High-definition Experience (HDX) protocol
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   ASP: Adaptive Streaming Protocol (ASP) protocol provided by Alibaba Cloud
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * ASP
   */
  protocolType?: string;
  /**
   * @remarks
   * The time when the cloud computer was reset.
   * 
   * @example
   * 2021-03-03 08:48:08
   */
  resetTime?: string;
  /**
   * @remarks
   * The system disk size. Unit: GiB.
   * 
   * @example
   * 80
   */
  systemDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      connectionStatus: 'ConnectionStatus',
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      desktopStatus: 'DesktopStatus',
      diskType: 'DiskType',
      endUserId: 'EndUserId',
      endUserIds: 'EndUserIds',
      endUserName: 'EndUserName',
      endUserNames: 'EndUserNames',
      fotaVersion: 'FotaVersion',
      gpuDriverVersion: 'GpuDriverVersion',
      imageId: 'ImageId',
      imageName: 'ImageName',
      managementFlag: 'ManagementFlag',
      managementFlags: 'ManagementFlags',
      memberEniIp: 'MemberEniIp',
      osType: 'OsType',
      primaryEniIp: 'PrimaryEniIp',
      protocolType: 'ProtocolType',
      resetTime: 'ResetTime',
      systemDiskSize: 'SystemDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionStatus: 'string',
      desktopId: 'string',
      desktopName: 'string',
      desktopStatus: 'string',
      diskType: 'string',
      endUserId: 'string',
      endUserIds: { 'type': 'array', 'itemType': 'string' },
      endUserName: 'string',
      endUserNames: { 'type': 'array', 'itemType': 'string' },
      fotaVersion: 'string',
      gpuDriverVersion: 'string',
      imageId: 'string',
      imageName: 'string',
      managementFlag: 'string',
      managementFlags: { 'type': 'array', 'itemType': 'string' },
      memberEniIp: 'string',
      osType: 'string',
      primaryEniIp: 'string',
      protocolType: 'string',
      resetTime: 'string',
      systemDiskSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.endUserIds)) {
      $dara.Model.validateArray(this.endUserIds);
    }
    if(Array.isArray(this.endUserNames)) {
      $dara.Model.validateArray(this.endUserNames);
    }
    if(Array.isArray(this.managementFlags)) {
      $dara.Model.validateArray(this.managementFlags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

