// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateContainerGroupRequestVolumeConfigFileVolume } from "./UpdateContainerGroupRequestVolumeConfigFileVolume";
import { UpdateContainerGroupRequestVolumeEmptyDirVolume } from "./UpdateContainerGroupRequestVolumeEmptyDirVolume";
import { UpdateContainerGroupRequestVolumeFlexVolume } from "./UpdateContainerGroupRequestVolumeFlexVolume";
import { UpdateContainerGroupRequestVolumeHostPathVolume } from "./UpdateContainerGroupRequestVolumeHostPathVolume";
import { UpdateContainerGroupRequestVolumeNFSVolume } from "./UpdateContainerGroupRequestVolumeNfsvolume";


export class UpdateContainerGroupRequestVolume extends $dara.Model {
  configFileVolume?: UpdateContainerGroupRequestVolumeConfigFileVolume;
  emptyDirVolume?: UpdateContainerGroupRequestVolumeEmptyDirVolume;
  flexVolume?: UpdateContainerGroupRequestVolumeFlexVolume;
  hostPathVolume?: UpdateContainerGroupRequestVolumeHostPathVolume;
  NFSVolume?: UpdateContainerGroupRequestVolumeNFSVolume;
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
   * The type of the HostPath volume. Valid values:
   * 
   * *   Directory
   * *   File
   * 
   * >  This parameter is not publicly available.
   * 
   * @example
   * EmptyDirVolume
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      configFileVolume: 'ConfigFileVolume',
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
      configFileVolume: UpdateContainerGroupRequestVolumeConfigFileVolume,
      emptyDirVolume: UpdateContainerGroupRequestVolumeEmptyDirVolume,
      flexVolume: UpdateContainerGroupRequestVolumeFlexVolume,
      hostPathVolume: UpdateContainerGroupRequestVolumeHostPathVolume,
      NFSVolume: UpdateContainerGroupRequestVolumeNFSVolume,
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.configFileVolume && typeof (this.configFileVolume as any).validate === 'function') {
      (this.configFileVolume as any).validate();
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

