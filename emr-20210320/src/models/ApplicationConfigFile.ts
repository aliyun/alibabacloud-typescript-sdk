// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplicationConfigFile extends $dara.Model {
  /**
   * @remarks
   * 应用名称。
   * 
   * This parameter is required.
   * 
   * @example
   * HDFS
   */
  applicationName?: string;
  /**
   * @remarks
   * 配置文件名称。
   * 
   * This parameter is required.
   * 
   * @example
   * core-site.xml
   */
  configFileName?: string;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      configFileName: 'ConfigFileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      configFileName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

