// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallClusterAddonsRequestBody extends $dara.Model {
  /**
   * @remarks
   * 组件自定义参数，使用JSON字符串编码。
   * 
   * @example
   * {\\"IngressDashboardEnabled\\":\\"true\\",\\"sls_project_name\\":\\"your_sls_project_name\\"}
   */
  config?: string;
  /**
   * @remarks
   * 组件名称。您可以通过[ListAddons](https://help.aliyun.com/document_detail/2667939.html)接口查询可用组件的信息，包括组件名称及版本等。
   * 
   * This parameter is required.
   * 
   * @example
   * logtail-ds
   */
  name?: string;
  /**
   * @remarks
   * 组件版本。您可以通过[ListAddons](https://help.aliyun.com/document_detail/2667939.html)接口查询可用组件的信息，包括组件名称及版本等。
   * 
   * This parameter is required.
   * 
   * @example
   * v1.7.3.0-aliyun
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
   * 请求体参数。
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

