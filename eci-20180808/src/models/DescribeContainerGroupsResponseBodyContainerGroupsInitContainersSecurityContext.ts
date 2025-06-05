// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeContainerGroupsResponseBodyContainerGroupsInitContainersSecurityContextCapability } from "./DescribeContainerGroupsResponseBodyContainerGroupsInitContainersSecurityContextCapability";


export class DescribeContainerGroupsResponseBodyContainerGroupsInitContainersSecurityContext extends $dara.Model {
  /**
   * @remarks
   * The permissions specific to the processes in the container.
   */
  capability?: DescribeContainerGroupsResponseBodyContainerGroupsInitContainersSecurityContextCapability;
  /**
   * @remarks
   * Indicates whether permissions on the root file system are read-only.
   * 
   * @example
   * true
   */
  readOnlyRootFilesystem?: boolean;
  /**
   * @remarks
   * The UID that is used to run the entry point of the container process.
   * 
   * @example
   * 1557
   */
  runAsUser?: number;
  static names(): { [key: string]: string } {
    return {
      capability: 'Capability',
      readOnlyRootFilesystem: 'ReadOnlyRootFilesystem',
      runAsUser: 'RunAsUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capability: DescribeContainerGroupsResponseBodyContainerGroupsInitContainersSecurityContextCapability,
      readOnlyRootFilesystem: 'boolean',
      runAsUser: 'number',
    };
  }

  validate() {
    if(this.capability && typeof (this.capability as any).validate === 'function') {
      (this.capability as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

