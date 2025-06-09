// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateDownloadJobRequestConfiguration } from "./CreateDownloadJobRequestConfiguration";


export class CreateDownloadJobRequest extends $dara.Model {
  /**
   * @remarks
   * 下载配置
   * 
   * This parameter is required.
   */
  configuration?: CreateDownloadJobRequestConfiguration;
  /**
   * @remarks
   * 任务描述
   */
  description?: string;
  /**
   * @remarks
   * 任务显示名称
   * 
   * This parameter is required.
   * 
   * @example
   * download-123456789
   */
  displayName?: string;
  /**
   * @remarks
   * 代表资源名称的资源属性字段
   * 
   * This parameter is required.
   * 
   * @example
   * download-123
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      configuration: 'configuration',
      description: 'description',
      displayName: 'displayName',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: CreateDownloadJobRequestConfiguration,
      description: 'string',
      displayName: 'string',
      name: 'string',
    };
  }

  validate() {
    if(this.configuration && typeof (this.configuration as any).validate === 'function') {
      (this.configuration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

