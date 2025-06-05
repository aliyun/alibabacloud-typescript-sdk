// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeContainerGroupsResponseBodyContainerGroupsVolumesConfigFileVolumeConfigFileToPaths } from "./DescribeContainerGroupsResponseBodyContainerGroupsVolumesConfigFileVolumeConfigFileToPaths";


export class DescribeContainerGroupsResponseBodyContainerGroupsVolumes extends $dara.Model {
  /**
   * @remarks
   * The path of the ConfigFile volume.
   */
  configFileVolumeConfigFileToPaths?: DescribeContainerGroupsResponseBodyContainerGroupsVolumesConfigFileVolumeConfigFileToPaths[];
  /**
   * @remarks
   * The ID of the disk when you set Type to DiskVolume.
   * 
   * @example
   * d-xxxx
   */
  diskVolumeDiskId?: string;
  /**
   * @remarks
   * The file system type of the disk volume.
   * 
   * @example
   * xfs
   */
  diskVolumeFsType?: string;
  /**
   * @remarks
   * The storage media for the emptyDir volume. This parameter is empty by default, indicating that the node file system is used as the storage media. Valid values:
   * 
   * *   Memory: Memory is used as the storage media.
   * *   LocalRaid0: Local disks are formed into RAID 0. This value is valid only if an elastic container instance that has local disks mounted is created. For more information, see [Create an elastic container instance that has local disks mounted](https://help.aliyun.com/document_detail/114664.html).
   * 
   * @example
   * Memory
   */
  emptyDirVolumeMedium?: string;
  /**
   * @remarks
   * The storage size of the emptyDir volume.
   * 
   * @example
   * 256Mi
   */
  emptyDirVolumeSizeLimit?: string;
  /**
   * @remarks
   * The name of the driver when you set the Type parameter to FlexVolume.
   * 
   * @example
   * flexvolume
   */
  flexVolumeDriver?: string;
  /**
   * @remarks
   * The file system type when you set the Type parameter to FlexVolume. The default value varies based on the script of the FlexVolume plug-in.
   * 
   * @example
   * ntfs
   */
  flexVolumeFsType?: string;
  /**
   * @remarks
   * The options when you set the Type parameter to FlexVolume.
   * 
   * @example
   * [nolock,tcp,noresvport]
   */
  flexVolumeOptions?: string;
  /**
   * @remarks
   * The path of the NFS volume.
   * 
   * @example
   * /eci
   */
  NFSVolumePath?: string;
  /**
   * @remarks
   * Indicates whether the NFS volume is read-only.
   * 
   * @example
   * false
   */
  NFSVolumeReadOnly?: boolean;
  /**
   * @remarks
   * The address of the NFS server.
   * 
   * @example
   * 0eafxxxxx-xxxxx.cn-hangzhou.nas.aliyuncs.com
   */
  NFSVolumeServer?: string;
  /**
   * @remarks
   * The volume name.
   * 
   * @example
   * test-empty
   */
  name?: string;
  /**
   * @remarks
   * The type of the volume. Valid values:
   * 
   * *   EmptyDirVolume
   * *   NFSVolume
   * *   ConfigFileVolume
   * *   FlexVolume
   * 
   * @example
   * EmptyDirVolume
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      configFileVolumeConfigFileToPaths: 'ConfigFileVolumeConfigFileToPaths',
      diskVolumeDiskId: 'DiskVolumeDiskId',
      diskVolumeFsType: 'DiskVolumeFsType',
      emptyDirVolumeMedium: 'EmptyDirVolumeMedium',
      emptyDirVolumeSizeLimit: 'EmptyDirVolumeSizeLimit',
      flexVolumeDriver: 'FlexVolumeDriver',
      flexVolumeFsType: 'FlexVolumeFsType',
      flexVolumeOptions: 'FlexVolumeOptions',
      NFSVolumePath: 'NFSVolumePath',
      NFSVolumeReadOnly: 'NFSVolumeReadOnly',
      NFSVolumeServer: 'NFSVolumeServer',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configFileVolumeConfigFileToPaths: { 'type': 'array', 'itemType': DescribeContainerGroupsResponseBodyContainerGroupsVolumesConfigFileVolumeConfigFileToPaths },
      diskVolumeDiskId: 'string',
      diskVolumeFsType: 'string',
      emptyDirVolumeMedium: 'string',
      emptyDirVolumeSizeLimit: 'string',
      flexVolumeDriver: 'string',
      flexVolumeFsType: 'string',
      flexVolumeOptions: 'string',
      NFSVolumePath: 'string',
      NFSVolumeReadOnly: 'boolean',
      NFSVolumeServer: 'string',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.configFileVolumeConfigFileToPaths)) {
      $dara.Model.validateArray(this.configFileVolumeConfigFileToPaths);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

