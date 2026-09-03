// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDesktopsInGroupResponseBodyPaidDesktops extends $dara.Model {
  /**
   * @remarks
   * The connection status.
   * 
   * @example
   * Connected
   */
  connectionStatus?: string;
  /**
   * @remarks
   * The cloud desktop ID.
   * 
   * @example
   * ud-7ftf5b6yu77b0****
   */
  desktopId?: string;
  /**
   * @remarks
   * The cloud desktop name.
   * 
   * @example
   * DemoComputer
   */
  desktopName?: string;
  /**
   * @remarks
   * The cloud desktop status.
   * 
   * @example
   * Running
   */
  desktopStatus?: string;
  /**
   * @remarks
   * The disk type.
   * 
   * @example
   * SYSTEM
   */
  diskType?: string;
  /**
   * @remarks
   * The authorized user.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @remarks
   * The list of currently connected user IDs. This value is empty if the desktop is not connected.
   */
  endUserIds?: string[];
  /**
   * @remarks
   * The authorized username.
   * 
   * @example
   * alice
   */
  endUserName?: string;
  /**
   * @remarks
   * The list of current usernames. This value is empty if the desktop is not connected.
   */
  endUserNames?: string[];
  /**
   * @remarks
   * The time when the cloud desktop expires. This value is returned only for cloud desktops that use the subscription billable methods. The time is in the ISO 8601 format (UTC).
   * 
   * @example
   * 2021-12-31T15:59Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The image version information.
   * 
   * @example
   * 0.1.0-R-20220914.17****
   */
  fotaVersion?: string;
  /**
   * @remarks
   * The GPU driver version.
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
   * The management flag.
   * 
   * @example
   * NoFlag
   */
  managementFlag?: string;
  /**
   * @remarks
   * The list of management flags.
   */
  managementFlags?: string[];
  /**
   * @remarks
   * The IP address of the secondary ENI of the instance.
   * 
   * @example
   * 192.168.XX.XX
   */
  memberEniIp?: string;
  /**
   * @remarks
   * The operating system type.
   * 
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @remarks
   * The IP address of the primary ENI of the instance.
   * 
   * @example
   * 192.168.XX.XX
   */
  primaryEniIp?: string;
  /**
   * @remarks
   * The protocol type.
   * 
   * @example
   * ASP
   */
  protocolType?: string;
  /**
   * @remarks
   * The reset time of the cloud desktop.
   * 
   * @example
   * 2021-03-03 08:48:08
   */
  resetTime?: string;
  /**
   * @remarks
   * The system cloud disk size. Unit: GiB.
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
      expiredTime: 'ExpiredTime',
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
      expiredTime: 'string',
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

export class DescribeDesktopsInGroupResponseBodyPostPaidDesktops extends $dara.Model {
  /**
   * @remarks
   * The connection status.
   * 
   * @example
   * Connected
   */
  connectionStatus?: string;
  /**
   * @remarks
   * The retention duration. Unit: milliseconds.
   * 
   * @example
   * 4153958447
   */
  createDuration?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * The time is displayed in UTC in the ISO 8601 standard format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2022-01-21T06:34:57Z
   */
  createTime?: string;
  /**
   * @remarks
   * The cloud desktop ID.
   * 
   * @example
   * ud-2i8qxpv6t1a07****
   */
  desktopId?: string;
  /**
   * @remarks
   * The cloud desktop name.
   * 
   * @example
   * DemoComputer
   */
  desktopName?: string;
  /**
   * @remarks
   * The cloud desktop status.
   * 
   * @example
   * Stopped
   */
  desktopStatus?: string;
  /**
   * @remarks
   * The disk type.
   * 
   * @example
   * SYSTEM
   */
  diskType?: string;
  /**
   * @remarks
   * The authorized user.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @remarks
   * The list of currently connected user IDs. This value is empty if the desktop is not connected.
   */
  endUserIds?: string[];
  /**
   * @remarks
   * The authorized username.
   * 
   * @example
   * alice
   */
  endUserName?: string;
  /**
   * @remarks
   * The list of current usernames. This value is empty if the desktop is not connected.
   */
  endUserNames?: string[];
  /**
   * @remarks
   * The image version information.
   * 
   * @example
   * 0.1.0-R-20220914.17****
   */
  fotaVersion?: string;
  /**
   * @remarks
   * The GPU driver version.
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
   * The management flag.
   * 
   * @example
   * NoFlag
   */
  managementFlag?: string;
  /**
   * @remarks
   * The collection of management flags.
   */
  managementFlags?: string[];
  /**
   * @remarks
   * The IP address of the secondary ENI of the instance.
   * 
   * @example
   * 192.168.XX.XX
   */
  memberEniIp?: string;
  /**
   * @remarks
   * The operating system type.
   * 
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @remarks
   * The IP address of the primary ENI of the instance.
   * 
   * @example
   * 192.168.XX.XX
   */
  primaryEniIp?: string;
  /**
   * @remarks
   * The protocol type.
   * 
   * @example
   * HDX
   */
  protocolType?: string;
  /**
   * @remarks
   * The release time.
   * The time is displayed in UTC in the ISO 8601 standard format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2022-01-21T16:34:57Z
   */
  releaseTime?: string;
  /**
   * @remarks
   * The reset time of the cloud desktop.
   * 
   * @example
   * 2021-03-03 08:48:08
   */
  resetTime?: string;
  /**
   * @remarks
   * The system cloud disk size. Unit: GiB.
   * 
   * @example
   * 80
   */
  systemDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      connectionStatus: 'ConnectionStatus',
      createDuration: 'CreateDuration',
      createTime: 'CreateTime',
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
      releaseTime: 'ReleaseTime',
      resetTime: 'ResetTime',
      systemDiskSize: 'SystemDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionStatus: 'string',
      createDuration: 'string',
      createTime: 'string',
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
      releaseTime: 'string',
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

export class DescribeDesktopsInGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The token for the next query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of connected subscription cloud desktops.
   * 
   * @example
   * 100
   */
  onlinePrePaidDesktopsCount?: number;
  /**
   * @remarks
   * The list of subscription cloud desktops.
   */
  paidDesktops?: DescribeDesktopsInGroupResponseBodyPaidDesktops[];
  /**
   * @remarks
   * The total number of subscription cloud desktops.
   * 
   * @example
   * 10
   */
  paidDesktopsCount?: number;
  /**
   * @remarks
   * The list of pay-as-you-go cloud desktops.
   */
  postPaidDesktops?: DescribeDesktopsInGroupResponseBodyPostPaidDesktops[];
  /**
   * @remarks
   * The total number of pay-as-you-go cloud desktops.
   * 
   * @example
   * 10
   */
  postPaidDesktopsCount?: number;
  /**
   * @remarks
   * The total billing amount of pay-as-you-go cloud desktops.
   * 
   * @example
   * 10000
   */
  postPaidDesktopsTotalAmount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The number of running subscription cloud desktops.
   * 
   * @example
   * 100
   */
  runningPrePaidDesktopsCount?: number;
  /**
   * @remarks
   * The number of stopped subscription cloud desktops.
   * 
   * @example
   * 100
   */
  stopedPrePaidDesktopsCount?: number;
  /**
   * @remarks
   * The number of stopped subscription cloud desktops.
   * 
   * @example
   * 100
   */
  stoppedPrePaidDesktopsCount?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      onlinePrePaidDesktopsCount: 'OnlinePrePaidDesktopsCount',
      paidDesktops: 'PaidDesktops',
      paidDesktopsCount: 'PaidDesktopsCount',
      postPaidDesktops: 'PostPaidDesktops',
      postPaidDesktopsCount: 'PostPaidDesktopsCount',
      postPaidDesktopsTotalAmount: 'PostPaidDesktopsTotalAmount',
      requestId: 'RequestId',
      runningPrePaidDesktopsCount: 'RunningPrePaidDesktopsCount',
      stopedPrePaidDesktopsCount: 'StopedPrePaidDesktopsCount',
      stoppedPrePaidDesktopsCount: 'StoppedPrePaidDesktopsCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      onlinePrePaidDesktopsCount: 'number',
      paidDesktops: { 'type': 'array', 'itemType': DescribeDesktopsInGroupResponseBodyPaidDesktops },
      paidDesktopsCount: 'number',
      postPaidDesktops: { 'type': 'array', 'itemType': DescribeDesktopsInGroupResponseBodyPostPaidDesktops },
      postPaidDesktopsCount: 'number',
      postPaidDesktopsTotalAmount: 'number',
      requestId: 'string',
      runningPrePaidDesktopsCount: 'number',
      stopedPrePaidDesktopsCount: 'number',
      stoppedPrePaidDesktopsCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.paidDesktops)) {
      $dara.Model.validateArray(this.paidDesktops);
    }
    if(Array.isArray(this.postPaidDesktops)) {
      $dara.Model.validateArray(this.postPaidDesktops);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

