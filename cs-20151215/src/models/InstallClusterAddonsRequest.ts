// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallClusterAddonsRequestBody extends $dara.Model {
  /**
   * @remarks
   * The custom parameters of the component, encoded as a JSON string.
   * 
   * @example
   * {\\"IngressDashboardEnabled\\":\\"true\\",\\"sls_project_name\\":\\"your_sls_project_name\\"}
   */
  config?: string;
  /**
   * @remarks
   * The component name. You can call the [ListAddons](https://help.aliyun.com/document_detail/2667939.html) operation to query information about available components, including component names and versions.
   * 
   * This parameter is required.
   * 
   * @example
   * storage-operato
   */
  name?: string;
  /**
   * @remarks
   * The component version. You can call the [ListAddons](https://help.aliyun.com/document_detail/2667939.html) operation to query information about available components, including component names and versions.
   * 
   * This parameter is required.
   * 
   * @example
   * v1.32.9
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

export class InstallClusterAddonsRequest extends $dara.Model {
  /**
   * @remarks
   * The request body parameters.
   * 
   * @example
   * ags-metrics-collector
   */
  body?: InstallClusterAddonsRequestBody[];
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': InstallClusterAddonsRequestBody },
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

