// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateContainerGroupRequestVolumeConfigFileVolume } from "./CreateContainerGroupRequestVolumeConfigFileVolume";
import { CreateContainerGroupRequestVolumeDiskVolume } from "./CreateContainerGroupRequestVolumeDiskVolume";
import { CreateContainerGroupRequestVolumeEmptyDirVolume } from "./CreateContainerGroupRequestVolumeEmptyDirVolume";
import { CreateContainerGroupRequestVolumeFlexVolume } from "./CreateContainerGroupRequestVolumeFlexVolume";
import { CreateContainerGroupRequestVolumeHostPathVolume } from "./CreateContainerGroupRequestVolumeHostPathVolume";
import { CreateContainerGroupRequestVolumeNFSVolume } from "./CreateContainerGroupRequestVolumeNfsvolume";


export class CreateContainerGroupRequestVolume extends $dara.Model {
  configFileVolume?: CreateContainerGroupRequestVolumeConfigFileVolume;
  diskVolume?: CreateContainerGroupRequestVolumeDiskVolume;
  emptyDirVolume?: CreateContainerGroupRequestVolumeEmptyDirVolume;
  flexVolume?: CreateContainerGroupRequestVolumeFlexVolume;
  hostPathVolume?: CreateContainerGroupRequestVolumeHostPathVolume;
  NFSVolume?: CreateContainerGroupRequestVolumeNFSVolume;
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
   * The type of the HostPath volume. Valid values:
   * 
   * *   Directory
   * *   File
   * 
   * >  Only users in the whitelist can mount HostPath volumes.
   * 
   * @example
   * ConfigFileVolume
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      configFileVolume: 'ConfigFileVolume',
      diskVolume: 'DiskVolume',
      emptyDirVolume: 'EmptyDirVolume',
      flexVolume: 'FlexVolume',
      hostPathVolume: 'HostPathVolume',
      NFSVolume: 'NFSVolume',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configFileVolume: CreateContainerGroupRequestVolumeConfigFileVolume,
      diskVolume: CreateContainerGroupRequestVolumeDiskVolume,
      emptyDirVolume: CreateContainerGroupRequestVolumeEmptyDirVolume,
      flexVolume: CreateContainerGroupRequestVolumeFlexVolume,
      hostPathVolume: CreateContainerGroupRequestVolumeHostPathVolume,
      NFSVolume: CreateContainerGroupRequestVolumeNFSVolume,
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.configFileVolume && typeof (this.configFileVolume as any).validate === 'function') {
      (this.configFileVolume as any).validate();
    }
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

