// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnsureSharedPrometheusInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the returned information. zh indicates Chinese, and en indicates English. Default value: zh.
   * 
   * @example
   * zh
   */
  aliyunLang?: string;
  /**
   * @remarks
   * The share scope. Currently, only Workspace is supported, which indicates the shared Prometheus instance for the workspace in the requested region. Workspaces in the same region share the same instance, and no additional instances are created. Policy and Environment are not currently supported.
   * 
   * This parameter is required.
   * 
   * @example
   * Workspace
   */
  shareScope?: string;
  /**
   * @remarks
   * The name of the workspace. If the workspace does not exist, a 404 error is returned.
   * 
   * This parameter is required.
   * 
   * @example
   * team-workspace
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunLang: 'aliyunLang',
      shareScope: 'shareScope',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunLang: 'string',
      shareScope: 'string',
      workspace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

