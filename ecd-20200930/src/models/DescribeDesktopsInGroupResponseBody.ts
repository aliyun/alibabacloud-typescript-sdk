// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDesktopsInGroupResponseBodyPaidDesktops extends $dara.Model {
  /**
   * @remarks
   * The connection status of the cloud desktop.
   * 
   * @example
   * Connected
   */
  connectionStatus?: string;
  /**
   * @remarks
   * The ID of the cloud desktop.
   * 
   * @example
   * ud-7ftf5b6yu77b0****
   */
  desktopId?: string;
  /**
   * @remarks
   * The name of the cloud desktop.
   * 
   * @example
   * DemoComputer
   */
  desktopName?: string;
  /**
   * @remarks
   * The status of the cloud desktop.
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
   * The ID of the authorized end user.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @remarks
   * The IDs of end users connected to the cloud desktop. If no end user is connected, the array is empty.
   */
  endUserIds?: string[];
  /**
   * @remarks
   * The name of the authorized end user.
   * 
   * @example
   * alice
   */
  endUserName?: string;
  /**
   * @remarks
   * The usernames of end users connected to the cloud desktop. If no end user is connected, the array is empty.
   */
  endUserNames?: string[];
  /**
   * @remarks
   * The expiration time of the subscription cloud desktop.
   */
  expiredTime?: string;
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
   * The management flags.
   */
  managementFlags?: string[];
  /**
   * @remarks
   * The IP address of the secondary elastic network interface of the instance.
   * 
   * @example
   * 192.168.XX.XX
   */
  memberEniIp?: string;
  /**
   * @remarks
   * The type of the operating system.
   * 
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @remarks
   * The IP address of the primary network interface of the instance.
   * 
   * @example
   * 192.168.XX.XX
   */
  primaryEniIp?: string;
  /**
   * @remarks
   * The session protocol.
   * 
   * @example
   * ASP
   */
  protocolType?: string;
  /**
   * @remarks
   * The time when the cloud desktop was last reset.
   * 
   * @example
   * 2021-03-03 08:48:08
   */
  resetTime?: string;
  /**
   * @remarks
   * The size of the system disk, in GiB.
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
   * The connection status of the cloud desktop.
   * 
   * @example
   * Connected
   */
  connectionStatus?: string;
  /**
   * @remarks
   * The retention period of the cloud desktop, in milliseconds.
   * 
   * @example
   * 4153958447
   */
  createDuration?: string;
  /**
   * @remarks
   * The creation time of the cloud desktop.
   * 
   * @example
   * 2022-01-21T06:34:57Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the cloud desktop.
   * 
   * @example
   * ud-2i8qxpv6t1a07****
   */
  desktopId?: string;
  /**
   * @remarks
   * The name of the cloud desktop.
   * 
   * @example
   * DemoComputer
   */
  desktopName?: string;
  /**
   * @remarks
   * The status of the cloud desktop.
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
   * The ID of the authorized end user.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @remarks
   * The IDs of end users connected to the cloud desktop. If no end user is connected, the array is empty.
   */
  endUserIds?: string[];
  /**
   * @remarks
   * The name of the authorized end user.
   * 
   * @example
   * alice
   */
  endUserName?: string;
  /**
   * @remarks
   * The usernames of end users connected to the cloud desktop. If no end user is connected, the array is empty.
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
   * The management flags.
   */
  managementFlags?: string[];
  /**
   * @remarks
   * The IP address of the secondary elastic network interface of the instance.
   * 
   * @example
   * 192.168.XX.XX
   */
  memberEniIp?: string;
  /**
   * @remarks
   * The type of the operating system.
   * 
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @remarks
   * The IP address of the primary network interface of the instance.
   * 
   * @example
   * 192.168.XX.XX
   */
  primaryEniIp?: string;
  /**
   * @remarks
   * The session protocol.
   * 
   * @example
   * HDX
   */
  protocolType?: string;
  /**
   * @remarks
   * The release time of the cloud desktop.
   * 
   * @example
   * 2022-01-21T16:34:57Z
   */
  releaseTime?: string;
  /**
   * @remarks
   * The time when the cloud desktop was last reset.
   * 
   * @example
   * 2021-03-03 08:48:08
   */
  resetTime?: string;
  /**
   * @remarks
   * The size of the system disk, in GiB.
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
   * The token to retrieve the next page of results. If this parameter is not returned, all results have been retrieved.
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
   * A list of subscription cloud desktops.
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
   * A list of pay-as-you-go cloud desktops.
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
   * The total billed amount for the pay-as-you-go cloud desktops.
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
   * Deprecated. This parameter is misspelled. Use `StoppedPrePaidDesktopsCount` instead.
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

