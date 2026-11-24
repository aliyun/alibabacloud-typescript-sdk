// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeClusterAddonsRequestBody extends $dara.Model {
  /**
   * @remarks
   * The name of the add-on.
   * 
   * This parameter is required.
   * 
   * @example
   * coredns
   */
  componentName?: string;
  /**
   * @remarks
   * The custom parameters of the add-on, encoded as a JSON string.
   * 
   * @example
   * {"CpuRequest":"800m"}
   */
  config?: string;
  /**
   * @remarks
   * The target version to which the add-on is upgraded. You can call the DescribeAddon operation to view the upgradable versions of the add-on.
   * 
   * This parameter is required.
   * 
   * @example
   * v1.11.3.5-5321daf49-aliyun
   */
  nextVersion?: string;
  /**
   * @remarks
   * The upgrade policy for the add-on. Valid values:
   * - overwrite: Overwrite.
   * - canary: Canary.
   * 
   * @example
   * canary
   */
  policy?: string;
  /**
   * @remarks
   * The current version of the add-on.
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

