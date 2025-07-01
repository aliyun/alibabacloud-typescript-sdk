// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProtocolServiceResponseBodyProtocolServices extends $dara.Model {
  /**
   * @remarks
   * The time when the protocol service was created. The time is displayed in UTC.
   * 
   * @example
   * 2018-12-12T07:28:38Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the protocol service.
   * 
   * Limits:
   * 
   * *   The description must be 2 to 128 characters in length.
   * *   The description must start with a letter and cannot start with `http://` or `https://`.
   * *   The description can contain letters, digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * @example
   * cpfs-099394bd928c****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The base throughput of the protocol service. Unit: MB/s.
   * 
   * @example
   * 100
   */
  instanceBaseThroughput?: number;
  /**
   * @remarks
   * The burst throughput of the protocol service. Unit: MB/s.
   * 
   * @example
   * 100
   */
  instanceBurstThroughput?: number;
  /**
   * @remarks
   * The memory cache size of the protocol service. Unit: GiB.
   * 
   * @example
   * 0
   */
  instanceRAM?: number;
  /**
   * @remarks
   * The time when the protocol service was modified. The time is displayed in UTC.
   * 
   * @example
   * 2018-12-12T07:28:38Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The total number of CPFS directories and filesets exported in the protocol service.
   * 
   * @example
   * 5
   */
  mountTargetCount?: number;
  /**
   * @remarks
   * The ID of the protocol service.
   * 
   * @example
   * ptc-197ed6a00f2b****
   */
  protocolServiceId?: string;
  /**
   * @remarks
   * The specification of the protocol service.
   * 
   * *   Valid value: General.
   * *   Default value: General.
   * 
   * @example
   * General
   */
  protocolSpec?: string;
  /**
   * @remarks
   * The throughput of the protocol service. Unit: MB/s.
   * 
   * @example
   * 500
   */
  protocolThroughput?: number;
  /**
   * @remarks
   * The protocol type supported by the protocol service.
   * 
   * Valid values:
   * 
   * *   NFS: The protocol service supports access over the Network File System (NFS) protocol.
   * 
   * @example
   * NFS
   */
  protocolType?: string;
  /**
   * @remarks
   * The status of the protocol service.
   * 
   * Valid values:
   * 
   * *   Creating: The protocol service is being created.
   * *   Starting: The protocol service is being started.
   * *   Running: The protocol service is running.
   * *   Updating: The protocol service is being updated.
   * *   Deleting: The protocol service is being deleted.
   * *   Stopping: The protocol service is being stopped.
   * *   Stopped: The protocol service is stopped.
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      fileSystemId: 'FileSystemId',
      instanceBaseThroughput: 'InstanceBaseThroughput',
      instanceBurstThroughput: 'InstanceBurstThroughput',
      instanceRAM: 'InstanceRAM',
      modifyTime: 'ModifyTime',
      mountTargetCount: 'MountTargetCount',
      protocolServiceId: 'ProtocolServiceId',
      protocolSpec: 'ProtocolSpec',
      protocolThroughput: 'ProtocolThroughput',
      protocolType: 'ProtocolType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      fileSystemId: 'string',
      instanceBaseThroughput: 'number',
      instanceBurstThroughput: 'number',
      instanceRAM: 'number',
      modifyTime: 'string',
      mountTargetCount: 'number',
      protocolServiceId: 'string',
      protocolSpec: 'string',
      protocolThroughput: 'number',
      protocolType: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

