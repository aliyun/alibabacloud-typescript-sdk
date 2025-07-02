// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Application extends $dara.Model {
  /**
   * @remarks
   * 应用名称。从EMR控制台集群创建页面可查看到指定发行版的应用名称列表。
   * 
   * This parameter is required.
   * 
   * @example
   * HDFS
   */
  applicationName?: string;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

