// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyEciScalingConfigurationRequestVolumesDiskVolume } from "./ModifyEciScalingConfigurationRequestVolumesDiskVolume";
import { ModifyEciScalingConfigurationRequestVolumesEmptyDirVolume } from "./ModifyEciScalingConfigurationRequestVolumesEmptyDirVolume";
import { ModifyEciScalingConfigurationRequestVolumesFlexVolume } from "./ModifyEciScalingConfigurationRequestVolumesFlexVolume";
import { ModifyEciScalingConfigurationRequestVolumesHostPathVolume } from "./ModifyEciScalingConfigurationRequestVolumesHostPathVolume";
import { ModifyEciScalingConfigurationRequestVolumesNFSVolume } from "./ModifyEciScalingConfigurationRequestVolumesNfsvolume";
import { ModifyEciScalingConfigurationRequestVolumesConfigFileVolumeConfigFileToPath } from "./ModifyEciScalingConfigurationRequestVolumesConfigFileVolumeConfigFileToPath";


export class ModifyEciScalingConfigurationRequestVolumes extends $dara.Model {
  diskVolume?: ModifyEciScalingConfigurationRequestVolumesDiskVolume;
  emptyDirVolume?: ModifyEciScalingConfigurationRequestVolumesEmptyDirVolume;
  flexVolume?: ModifyEciScalingConfigurationRequestVolumesFlexVolume;
  hostPathVolume?: ModifyEciScalingConfigurationRequestVolumesHostPathVolume;
  NFSVolume?: ModifyEciScalingConfigurationRequestVolumesNFSVolume;
  /**
   * @remarks
   * The paths to the configuration files.
   */
  configFileVolumeConfigFileToPath?: ModifyEciScalingConfigurationRequestVolumesConfigFileVolumeConfigFileToPath[];
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
   * The volume name.
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
   * EmptyDirVolume
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      diskVolume: 'DiskVolume',
      emptyDirVolume: 'EmptyDirVolume',
      flexVolume: 'FlexVolume',
      hostPathVolume: 'HostPathVolume',
      NFSVolume: 'NFSVolume',
      configFileVolumeConfigFileToPath: 'ConfigFileVolumeConfigFileToPath',
      configFileVolumeDefaultMode: 'ConfigFileVolumeDefaultMode',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskVolume: ModifyEciScalingConfigurationRequestVolumesDiskVolume,
      emptyDirVolume: ModifyEciScalingConfigurationRequestVolumesEmptyDirVolume,
      flexVolume: ModifyEciScalingConfigurationRequestVolumesFlexVolume,
      hostPathVolume: ModifyEciScalingConfigurationRequestVolumesHostPathVolume,
      NFSVolume: ModifyEciScalingConfigurationRequestVolumesNFSVolume,
      configFileVolumeConfigFileToPath: { 'type': 'array', 'itemType': ModifyEciScalingConfigurationRequestVolumesConfigFileVolumeConfigFileToPath },
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
    if(Array.isArray(this.configFileVolumeConfigFileToPath)) {
      $dara.Model.validateArray(this.configFileVolumeConfigFileToPath);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

