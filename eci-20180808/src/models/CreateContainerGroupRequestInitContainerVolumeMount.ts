// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateContainerGroupRequestInitContainerVolumeMount extends $dara.Model {
  /**
   * @remarks
   * The directory to which the volume is mounted. The data stored in this directory is overwritten by the data on the volume. Specify this parameter with caution.
   * 
   * @example
   * /usr/share/
   */
  mountPath?: string;
  /**
   * @remarks
   * The mount propagation settings of the volume. Mount propagation allows volumes that are mounted on one init container to be shared with other init containers in the same pod, or even with other pods on the same node. Valid values:
   * 
   * *   None: The volume mount does not receive subsequent mounts that are performed on this volume or subdirectories of this volume.
   * *   HostToCotainer: The volume mount receives subsequent mounts that are performed on this volume or the subdirectories of this volume.
   * *   Bidirectional: This value is similar to HostToContainer. The volume mount receives subsequent mounts that are performed on this volume or the subdirectories of this volume. In addition, all volume mounts that are mounted on the init container are propagated back to the host and all init containers of all pods that use the same volume.
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
   * Specifies whether the mount path is read-only. Default value: false.
   * 
   * @example
   * false
   */
  readOnly?: boolean;
  /**
   * @remarks
   * The subdirectory of the volume. The pod can mount different directories of the same volume to different subdirectories of init containers.
   * 
   * @example
   * /usr/sub/
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

