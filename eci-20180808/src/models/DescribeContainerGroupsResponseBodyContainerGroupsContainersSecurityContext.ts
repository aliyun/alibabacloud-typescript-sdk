// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeContainerGroupsResponseBodyContainerGroupsContainersSecurityContextCapability } from "./DescribeContainerGroupsResponseBodyContainerGroupsContainersSecurityContextCapability";


export class DescribeContainerGroupsResponseBodyContainerGroupsContainersSecurityContext extends $dara.Model {
  /**
   * @remarks
   * The permissions specific to the processes in the container.
   */
  capability?: DescribeContainerGroupsResponseBodyContainerGroupsContainersSecurityContextCapability;
  /**
   * @remarks
   * Indicates whether permissions on the root file system are read-only. Valid value: true.
   * 
   * @example
   * true
   */
  readOnlyRootFilesystem?: boolean;
  /**
   * @remarks
   * The user ID (UID) that is used to run the container.
   * 
   * @example
   * 1000
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
      capability: DescribeContainerGroupsResponseBodyContainerGroupsContainersSecurityContextCapability,
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

