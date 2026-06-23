// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeClusterAddonsRequestBody extends $dara.Model {
  /**
   * @remarks
   * The component name.
   * 
   * This parameter is required.
   * 
   * @example
   * coredns
   */
  componentName?: string;
  /**
   * @remarks
   * The custom parameters of the component, encoded as a JSON string.
   * 
   * @example
   * {"CpuRequest":"800m"}
   */
  config?: string;
  /**
   * @remarks
   * The target version to which you want to upgrade. You can call the `DescribeAddon` operation to query the versions to which the component can be upgraded.
   * 
   * This parameter is required.
   * 
   * @example
   * v1.11.3.5-5321daf49-aliyun
   */
  nextVersion?: string;
  /**
   * @remarks
   * The component upgrade policy. Valid values:
   * - overwrite: overwrites the existing version.
   * - canary: performs a canary upgrade.
   * 
   * @example
   * canary
   */
  policy?: string;
  /**
   * @remarks
   * The current component version.
   * 
   * @example
   * v1.11.3.2-f57ea7ed6-aliyun
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      componentName: 'component_name',
      config: 'config',
      nextVersion: 'next_version',
      policy: 'policy',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentName: 'string',
      config: 'string',
      nextVersion: 'string',
      policy: 'string',
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

export class UpgradeClusterAddonsRequest extends $dara.Model {
  /**
   * @remarks
   * The request parameters.
   */
  body?: UpgradeClusterAddonsRequestBody[];
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': UpgradeClusterAddonsRequestBody },
    };
  }

  validate() {
    if(Array.isArray(this.body)) {
      $dara.Model.validateArray(this.body);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

