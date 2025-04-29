// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyEciScalingConfigurationRequestInitContainersInitContainerVolumeMounts extends $dara.Model {
  /**
   * @remarks
   * The directory within the init container onto which you want to mount the volume.
   * 
   * >  The information stored within this directory is overwritten by the data on the mounted volume. Exercise caution when you specify this parameter.
   * 
   * @example
   * /usr/share/
   */
  mountPath?: string;
  /**
   * @remarks
   * The mount propagation settings of the volume. Mount propagation enables volumes mounted on one container to be shared among other containers within the same pod or across distinct pods residing on the same node. Valid values:
   * 
   * *   None: Subsequent mounts executed on the volume or its subdirectories do not propagate to the volume.
   * *   HostToCotainer: Subsequent mounts executed on the volume or its subdirectories propagate to the volume.
   * *   Bidirectional: This value is similar to HostToCotainer. Subsequent mounts executed on the volume or its subdirectories propagate to the volume. In addition, volume mounts executed on the container propagate back to the underlying instance and to all containers across every pod that uses the same volume.
   * 
   * Default value: None.
   * 
   * @example
   * None
   */
  mountPropagation?: string;
  /**
   * @remarks
   * The name of the volume.
   * 
   * @example
   * test-empty
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether the mount path is read-only.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  readOnly?: boolean;
  /**
   * @remarks
   * The volume subdirectory. The pod can mount different directories of the same volume to different subdirectories of init containers.
   * 
   * @example
   * Always
   */
  subPath?: string;
  static names(): { [key: string]: string } {
    return {
      mountPath: 'MountPath',
      mountPropagation: 'MountPropagation',
      name: 'Name',
      readOnly: 'ReadOnly',
      subPath: 'SubPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPath: 'string',
      mountPropagation: 'string',
      name: 'string',
      readOnly: 'boolean',
      subPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

