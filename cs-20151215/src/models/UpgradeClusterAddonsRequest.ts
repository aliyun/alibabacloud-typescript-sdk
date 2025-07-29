// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeClusterAddonsRequestBody extends $dara.Model {
  /**
   * @remarks
   * The name of the component.
   * 
   * This parameter is required.
   * 
   * @example
   * coredns
   */
  componentName?: string;
  /**
   * @remarks
   * The custom component settings that you want to use. The value is a JSON string.
   * 
   * @example
   * {\\"CpuRequest\\":\\"800m\\"}
   */
  config?: string;
  /**
   * @remarks
   * The version to which the component can be updated. You can call the `DescribeClusterAddonsVersion` operation to query the version to which the component can be updated.
   * 
   * This parameter is required.
   * 
   * @example
   * 1.6.7
   */
  nextVersion?: string;
  /**
   * @remarks
   * The update policy. Valid values:
   * 
   * *   overwrite
   * *   canary
   * 
   * @example
   * canary
   */
  policy?: string;
  /**
   * @remarks
   * The current version of the component.
   * 
   * @example
   * v1.6.2
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

