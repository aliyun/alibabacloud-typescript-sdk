// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAddonResponseBodyNewerVersions extends $dara.Model {
  /**
   * @remarks
   * The minimum cluster version required by the component version.
   * 
   * @example
   * 1.20.4
   */
  minimumClusterVersion?: string;
  /**
   * @remarks
   * Indicates whether the component can be updated to the version.
   * 
   * *   true: yes
   * *   false: no
   * 
   * @example
   * true
   */
  upgradable?: boolean;
  /**
   * @remarks
   * The latest version number of the component.
   * 
   * @example
   * v1.9.3.10-7dfca203-aliyun
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      minimumClusterVersion: 'minimum_cluster_version',
      upgradable: 'upgradable',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      minimumClusterVersion: 'string',
      upgradable: 'boolean',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

