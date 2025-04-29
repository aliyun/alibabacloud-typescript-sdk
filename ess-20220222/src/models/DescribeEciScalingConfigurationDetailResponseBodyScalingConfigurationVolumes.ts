// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationVolumesConfigFileVolumeConfigFileToPaths } from "./DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationVolumesConfigFileVolumeConfigFileToPaths";


export class DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationVolumes extends $dara.Model {
  /**
   * @remarks
   * The paths to the configuration files.
   */
  configFileVolumeConfigFileToPaths?: DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationVolumesConfigFileVolumeConfigFileToPaths[];
  /**
   * @remarks
   * The default permissions on the ConfigFile volume.
   * 
   * @example
   * 0644
   */
  configFileVolumeDefaultMode?: number;
  /**
   * @remarks
   * The ID of the disk volume.
   * 
   * @example
   * d-xx
   */
  diskVolumeDiskId?: string;
  /**
   * @remarks
   * The size of the disk volume. Unit: GiB.
   * 
   * @example
   * 15
   */
  diskVolumeDiskSize?: number;
  /**
   * @remarks
   * The system type of the disk volume.
   * 
   * @example
   * xfs
   */
  diskVolumeFsType?: string;
  /**
   * @remarks
   * The storage medium of the emptyDir volume. If you do not specify a storage medium for the emptyDir volume, the volume stores data in the file system of the node by default. We recommend that you set this parameter to memory. In this case, the emptyDir volume stores data in the specified memory.
   * 
   * @example
   * memory
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
   * The name of the FlexVolume driver.
   * 
   * @example
   * flexvolume
   */
  flexVolumeDriver?: string;
  /**
   * @remarks
   * The type of the mounted file system. The default value is determined by the script of FlexVolume.
   * 
   * @example
   * ext4
   */
  flexVolumeFsType?: string;
  /**
   * @remarks
   * The FlexVolume options.
   * 
   * @example
   * {"volumeId":"d-2zehdahrwoa7srg****","performanceLevel": "PL2"}
   */
  flexVolumeOptions?: string;
  /**
   * @remarks
   * The path to the HostPath volume on the host.
   * 
   * @example
   * /pod/data
   */
  hostPathVolumePath?: string;
  /**
   * @remarks
   * The type of the HostPath volume.
   * 
   * @example
   * Directory
   */
  hostPathVolumeType?: string;
  /**
   * @remarks
   * The path to the Network File System (NFS) volume.
   * 
   * @example
   * /share
   */
  NFSVolumePath?: string;
  /**
   * @remarks
   * Indicates whether the NFS volume is read-only.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  NFSVolumeReadOnly?: boolean;
  /**
   * @remarks
   * The endpoint of the NFS server.
   * 
   * @example
   * 3f9cd4a596-naw76.cn-shanghai.nas.aliyuncs.com
   */
  NFSVolumeServer?: string;
  /**
   * @remarks
   * The volume name.
   * 
   * @example
   * default-volume1
   */
  name?: string;
  /**
   * @remarks
   * The volume type. Valid values:
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
      configFileVolumeDefaultMode: 'ConfigFileVolumeDefaultMode',
      diskVolumeDiskId: 'DiskVolumeDiskId',
      diskVolumeDiskSize: 'DiskVolumeDiskSize',
      diskVolumeFsType: 'DiskVolumeFsType',
      emptyDirVolumeMedium: 'EmptyDirVolumeMedium',
      emptyDirVolumeSizeLimit: 'EmptyDirVolumeSizeLimit',
      flexVolumeDriver: 'FlexVolumeDriver',
      flexVolumeFsType: 'FlexVolumeFsType',
      flexVolumeOptions: 'FlexVolumeOptions',
      hostPathVolumePath: 'HostPathVolumePath',
      hostPathVolumeType: 'HostPathVolumeType',
      NFSVolumePath: 'NFSVolumePath',
      NFSVolumeReadOnly: 'NFSVolumeReadOnly',
      NFSVolumeServer: 'NFSVolumeServer',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configFileVolumeConfigFileToPaths: { 'type': 'array', 'itemType': DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationVolumesConfigFileVolumeConfigFileToPaths },
      configFileVolumeDefaultMode: 'number',
      diskVolumeDiskId: 'string',
      diskVolumeDiskSize: 'number',
      diskVolumeFsType: 'string',
      emptyDirVolumeMedium: 'string',
      emptyDirVolumeSizeLimit: 'string',
      flexVolumeDriver: 'string',
      flexVolumeFsType: 'string',
      flexVolumeOptions: 'string',
      hostPathVolumePath: 'string',
      hostPathVolumeType: 'string',
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

