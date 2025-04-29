// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyEciScalingConfigurationRequestContainersVolumeMounts extends $dara.Model {
  /**
   * @remarks
   * The directory within the container onto which you want to mount the volume.
   * 
   * >  The information stored within this directory is overwritten by the data on the mounted volume. Exercise caution when you specify this parameter.
   * 
   * @example
   * /pod/data
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
   * @example
   * None
   */
  mountPropagation?: string;
  /**
   * @remarks
   * The volume name. The value of this parameter is the same as the name of the volume that is mounted to containers.
   * 
   * @example
   * default-volume1
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether the volume is read-only.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  readOnly?: boolean;
  /**
   * @remarks
   * The volume subdirectory.
   * 
   * @example
   * data2/
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

