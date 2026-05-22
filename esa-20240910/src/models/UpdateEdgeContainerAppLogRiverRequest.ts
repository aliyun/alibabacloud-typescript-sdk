// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEdgeContainerAppLogRiverRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID, which can be obtained by calling the [ListEdgeContainerApps](https://help.aliyun.com/document_detail/2852396.html) operation.
   * 
   * @example
   * app-88068867578379****
   */
  appId?: string;
  /**
   * @remarks
   * The log path of the container.
   * 
   * @example
   * /root/hello.log
   */
  path?: string;
  /**
   * @remarks
   * Specifies whether to collect the standard output of the container.
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

