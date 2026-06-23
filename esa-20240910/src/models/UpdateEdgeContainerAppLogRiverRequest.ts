// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEdgeContainerAppLogRiverRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. You can call the [ListEdgeContainerApps](https://help.aliyun.com/document_detail/2852396.html) operation to obtain the application ID.
   * >Notice: The AppId is in the format of the app- prefix followed by a numeric suffix, with a total length of 20 to 64 characters (example: app-8806886***83794688). Call ListEdgeContainerApps to obtain an existing AppId, or call CreateEdgeContainerApp to create an application first.</notice>.
   * 
   * @example
   * app-88068867578379****
   */
  appId?: string;
  /**
   * @remarks
   * The log file of the container.
   * 
   * @example
   * /root/hello.log
   */
  path?: string;
  /**
   * @remarks
   * Specifies whether to enable standard output collection for the container.
   * 
   * @example
   * true
   */
  stdout?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      path: 'Path',
      stdout: 'Stdout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      path: 'string',
      stdout: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

