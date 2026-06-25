// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * 017f39b8-dfa4-4e16-a84b-1dcee4b1****
   */
  appId?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * test
   */
  appName?: string;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * @example
   * cn-shenzhen
   */
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      namespaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

