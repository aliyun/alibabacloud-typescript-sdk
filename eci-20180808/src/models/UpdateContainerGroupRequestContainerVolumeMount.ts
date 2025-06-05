// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateContainerGroupRequestContainerVolumeMount extends $dara.Model {
  /**
   * @remarks
   * The directory of the volume that is mounted to the container. The data in this directory is overwritten by the data on the volume. Specify this parameter with caution.
   * 
   * @example
   * /usr/share/
   */
  mountPath?: string;
  /**
   * @remarks
   * The mount propagation settings of the volume. Mount propagation allows volumes that are mounted on one container to be shared with other containers in the same pod, or even with other pods on the same node. Valid values:
   * 
   * *   None: This volume mount does not receive subsequent mounts that are performed on this volume or subdirectories of this volume.
   * *   HostToCotainer: The volume mount receives subsequent mounts that are performed on this volume or the subdirectories of this volume.
   * *   Bidirectional: The volume mount behaves the same as the HostToContainer mount. The volume mount receives subsequent mounts that are performed on the volume or the subdirectories of the volume. In addition, all volume mounts that are mounted on the container are propagated back to the host and all containers of all pods that use the same volume.
   * 
   * Default value: None.
   * 
   * @example
   * None
   */
  mountPropagation?: string;
  /**
   * @remarks
   * The name of the volume that is mounted to the container. Valid values: the values of Volume.N.Name, which are the names of volumes that are mounted to the elastic container instance.
   * 
   * @example
   * test-empty
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether the volume is read-only. Default value: false.
   * 
   * @example
   * false
   */
  readOnly?: boolean;
  /**
   * @remarks
   * The subdirectory of the volume that is mounted to the container. You can use this parameter to mount the same volume to different subdirectories of the container.
   * 
   * @example
   * /usr/share/sub/
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

