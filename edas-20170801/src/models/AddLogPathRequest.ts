// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddLogPathRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application. You can call the ListApplication operation to query the application ID. For more information, see [ListApplication](https://help.aliyun.com/document_detail/149390.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 3616cdca-4f92-4413**********
   */
  appId?: string;
  /**
   * @remarks
   * The absolute path of the log directory that you want to add. The value must start and end with a forward slash (`/`) and must contain `/log` or `/logs`. The following directories are the default log directories in Enterprise Distributed Application Service (EDAS):
   * 
   * *   /home/admin/edas-container/logs/
   * *   /home/admin/taobao-tomcat-7.0.59/logs/
   * *   /home/admin/taobao-tomcat-production-7.0.59.3/logs/
   * *   /home/admin/taobao-tomcat-production-7.0.70/logs/
   * *   /home/admin/edas-agent/logs/
   * 
   * This parameter is required.
   * 
   * @example
   * /temp/log/
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      path: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

