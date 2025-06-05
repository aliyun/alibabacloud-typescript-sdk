// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeContainerGroupsResponseBodyContainerGroupsContainersVolumeMounts extends $dara.Model {
  /**
   * @remarks
   * The directory of the volume that is mounted to the container. The data in this directory is overwritten by the data on the volume.
   * 
   * @example
   * /usr/share/
   */
  mountPath?: string;
  /**
   * @remarks
   * The mount propagation setting of the volume. Mount propagation allows volumes that are mounted on one container to be shared with other containers in the same pod, or even with other pods on the same node. Valid values:
   * 
   * *   None: The volume mount does not receive subsequent mounts that are performed on this volume or on the subdirectories of this volume.
   * *   HostToCotainer: The volume mount receives subsequent mounts that are performed on this volume or on the subdirectories of this volume.
   * *   Bidirectional: This value is similar to HostToCotainer. The volume mount receives subsequent mounts that are performed on this volume or on the subdirectories of this volume. In addition, all volume mounts that are performed on the container are propagated back to the host and all containers of all pods that use the same volume.
   * 
   * @example
   * None
   */
  mountPropagation?: string;
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
   * Indicates whether the volume is read-only.
   * 
   * @example
   * false
   */
  readOnly?: boolean;
  /**
   * @remarks
   * The subdirectory of the volume. You can use this parameter to mount the same volume to different subdirectories of the container.
   * 
   * @example
   * /usr/sub
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

