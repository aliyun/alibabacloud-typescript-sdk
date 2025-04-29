// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateEciScalingConfigurationRequestVolumesDiskVolume } from "./CreateEciScalingConfigurationRequestVolumesDiskVolume";
import { CreateEciScalingConfigurationRequestVolumesEmptyDirVolume } from "./CreateEciScalingConfigurationRequestVolumesEmptyDirVolume";
import { CreateEciScalingConfigurationRequestVolumesFlexVolume } from "./CreateEciScalingConfigurationRequestVolumesFlexVolume";
import { CreateEciScalingConfigurationRequestVolumesHostPathVolume } from "./CreateEciScalingConfigurationRequestVolumesHostPathVolume";
import { CreateEciScalingConfigurationRequestVolumesNFSVolume } from "./CreateEciScalingConfigurationRequestVolumesNfsvolume";
import { CreateEciScalingConfigurationRequestVolumesConfigFileVolumeConfigFileToPaths } from "./CreateEciScalingConfigurationRequestVolumesConfigFileVolumeConfigFileToPaths";


export class CreateEciScalingConfigurationRequestVolumes extends $dara.Model {
  diskVolume?: CreateEciScalingConfigurationRequestVolumesDiskVolume;
  emptyDirVolume?: CreateEciScalingConfigurationRequestVolumesEmptyDirVolume;
  flexVolume?: CreateEciScalingConfigurationRequestVolumesFlexVolume;
  hostPathVolume?: CreateEciScalingConfigurationRequestVolumesHostPathVolume;
  NFSVolume?: CreateEciScalingConfigurationRequestVolumesNFSVolume;
  /**
   * @remarks
   * The paths to the configuration files.
   */
  configFileVolumeConfigFileToPaths?: CreateEciScalingConfigurationRequestVolumesConfigFileVolumeConfigFileToPaths[];
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
   * The name of the volume.
   * 
   * @example
   * default-volume1
   */
  name?: string;
  /**
   * @remarks
   * The type of the Host directory. Examples: File, Directory, and Socket.
   * 
   * @example
   * ConfigFileVolume
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      diskVolume: 'DiskVolume',
      emptyDirVolume: 'EmptyDirVolume',
      flexVolume: 'FlexVolume',
      hostPathVolume: 'HostPathVolume',
      NFSVolume: 'NFSVolume',
      configFileVolumeConfigFileToPaths: 'ConfigFileVolumeConfigFileToPaths',
      configFileVolumeDefaultMode: 'ConfigFileVolumeDefaultMode',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskVolume: CreateEciScalingConfigurationRequestVolumesDiskVolume,
      emptyDirVolume: CreateEciScalingConfigurationRequestVolumesEmptyDirVolume,
      flexVolume: CreateEciScalingConfigurationRequestVolumesFlexVolume,
      hostPathVolume: CreateEciScalingConfigurationRequestVolumesHostPathVolume,
      NFSVolume: CreateEciScalingConfigurationRequestVolumesNFSVolume,
      configFileVolumeConfigFileToPaths: { 'type': 'array', 'itemType': CreateEciScalingConfigurationRequestVolumesConfigFileVolumeConfigFileToPaths },
      configFileVolumeDefaultMode: 'number',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.diskVolume && typeof (this.diskVolume as any).validate === 'function') {
      (this.diskVolume as any).validate();
    }
    if(this.emptyDirVolume && typeof (this.emptyDirVolume as any).validate === 'function') {
      (this.emptyDirVolume as any).validate();
    }
    if(this.flexVolume && typeof (this.flexVolume as any).validate === 'function') {
      (this.flexVolume as any).validate();
    }
    if(this.hostPathVolume && typeof (this.hostPathVolume as any).validate === 'function') {
      (this.hostPathVolume as any).validate();
    }
    if(this.NFSVolume && typeof (this.NFSVolume as any).validate === 'function') {
      (this.NFSVolume as any).validate();
    }
    if(Array.isArray(this.configFileVolumeConfigFileToPaths)) {
      $dara.Model.validateArray(this.configFileVolumeConfigFileToPaths);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

