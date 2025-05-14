// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallClusterAddonsRequestBody extends $dara.Model {
  /**
   * @remarks
   * The custom component settings that you want to use. The value is a JSON string.
   * 
   * @example
   * {\\"IngressDashboardEnabled\\":\\"true\\",\\"sls_project_name\\":\\"your_sls_project_name\\"}"}
   */
  config?: string;
  /**
   * @remarks
   * The component name.
   * 
   * This parameter is required.
   * 
   * @example
   * ags-metrics-collector
   */
  name?: string;
  /**
   * @remarks
   * The component version.
   * 
   * >  You can call the [DescribeClusterAddonsVersion](https://help.aliyun.com/document_detail/197434.html) operation to query the version of a component.
   * 
   * This parameter is required.
   * 
   * @example
   * v1.0.0.2-cc3b2d6-aliyun
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      name: 'name',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      name: 'string',
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

