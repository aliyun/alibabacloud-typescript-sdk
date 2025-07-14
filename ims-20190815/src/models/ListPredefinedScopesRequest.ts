// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPredefinedScopesRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the application. Valid values:
   * 
   * *   WebApp
   * *   NativeApp
   * *   ServerApp
   * 
   * If this parameter is empty, the permissions on all types of applications are queried.
   * 
   * @example
   * WebApp
   */
  appType?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

